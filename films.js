const express = require('express');
const router = express.Router();
const db = require('./db');
//const movieSchema = require('./validator/movieSchema'); // Importez le schéma

// 1. GET / : liste complète
router.get('/', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM movie');
  res.json(rows);
});

// 2. GET /:id : film par ID
router.get('/:id', async (req, res) => {
   //TODO : ECRIRE LA REQUETE PREPAREE
  const id=req.params.id;
  const sql="SELECT * FROM movie WHERE id_movie=?";
  const [rows]=await db.execute(sql,[id])   
  
  // const [rows] = 
  if (rows.length === 0) return res.status(404).send('Film non trouvé');
  res.json(rows[0]);
});

// 3. POST / : ajout d’un film
router.post('/', async (req, res) => {
  const Joi = require("joi");

  const movieSchema = Joi.object({
    title: Joi.string().min(2).required(),
    releaseDate: Joi.date(),
    duration: Joi.number().integer().min(1),
    note: Joi.number().integer().min(1).max(10),
    originCountry: Joi.string().alphanum().min(2).required(),
    id_director: Joi.number()
  });

  //Validation des données d'origine et fonctionnel
  const { error, value } = movieSchema.validate(req.body);
  if (error) {
    res.status(400).send("Erreur de validation des données : " + error.details[0].message);
    return;
  }
  //Validation des données a tester pour le validator
  //  const { error, value } = movieSchema.validate(req.body);
  // if (error) {
  //   res.status(400).send("Erreur de validation des données : " + error.details[0].message);
  //   return;
  // }
  //----------------------------------------------------------------------------------

  try {
    // Requête préparée avec la clause VALUES
    const sql = 'INSERT INTO movie(title, releaseDate, duration, note, originCountry, id_director) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [value.title, value.releaseDate, value.duration, value.note, value.originCountry, value.id_director];

    // Exécution de la requête
    await db.execute(sql, values);
    res.status(201).send('Film ajouté');
  } catch (err) {
    res.status(500).send('Erreur : ' + err.message);
  }
});


// 4. PATCH /:id : modification du titre
router.patch('/:id', async (req, res) => {
  const { titre } = req.body;
  if (!titre) return res.status(400).send('Nouveau titre requis');
    
  //TODO : ECRIRE LA REQUETE PREPAREE
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Titre mis à jour');
});

// 5. DELETE /:id : suppression
router.delete('/:id', async (req, res) => {
  const [result] = await db.execute('DELETE FROM movie WHERE id = ?', [req.params.id]);
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Film supprimé');
});

module.exports = router;


// 4. PATCH /:id : modification du titre
router.patch('/:id', async (req, res) => {
  const { titre } = req.body;
  if (!titre) return res.status(400).send('Nouveau titre requis');
    
  //TODO : ECRIRE LA REQUETE PREPAREE
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Titre mis à jour');
});

// 5. DELETE /:id : suppression
router.delete('/:id', async (req, res) => {
  const [result] = await db.execute('DELETE FROM movie WHERE id_movie = ?', [req.params.id]);
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Film supprimé');
});

module.exports = router;
