const express = require('express');
const router = express.Router();
const db = require('./db');

// 1. GET / : liste complète
router.get('/', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM director');
  res.json(rows);
});

// 2. GET /:id : film par ID
router.get('/:id', async (req, res) => {
   //TODO : ECRIRE LA REQUETE PREPAREE
  const id=req.params.id;
  const sql="SELECT * FROM director WHERE id_director=?";
  const [rows]=await db.execute(sql,[id])   
  
  // const [rows] = 
  if (rows.length === 0) return res.status(404).send('director non trouvé');
  res.json(rows[0]);
});

// 3. POST / : ajout d’un director
router.post('/', async (req, res) => {
  const Joi = require("joi");

  const directorSchema = Joi.object({
    name:Joi.string().min(2).required(),
    firstname:Joi.string().min(2).required(),
    birthday: Joi.date(),
    
  });

  // Validation des données
  const { error, value } = directorSchema.validate(req.body);
  if (error) {
    res.status(400).send("Erreur de validation des données : " + error.details[0].message);
    return;
  }

  try {
    // Requête préparée avec la clause VALUES
    const sql = 'INSERT INTO director(name, firstname, birthday) VALUES (?, ?, ?)';
    const values = [value.title, value.releaseDate, value.duration, value.note, value.originCountry, value.id_director];

    // Exécution de la requête
    await db.execute(sql, values);
    res.status(201).send('director ajouté');
  } catch (err) {
    res.status(500).send('Erreur : ' + err.message);
  }
});


// 4. PATCH /:id : modification du titre
router.patch('/:id', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Nouveau nom requis');
    
  //TODO : ECRIRE LA REQUETE PREPAREE
  if (result.affectedRows === 0) return res.status(404).send('director non trouvé');
  res.send('nom mis à jour');
});

// 5. DELETE /:id : suppression
router.delete('/:id', async (req, res) => {
  const [result] = await db.execute('DELETE FROM director WHERE id = ?', [req.params.id]);
  if (result.affectedRows === 0) return res.status(404).send('director non trouvé');
  res.send('director supprimé not killed !');
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
  const [result] = await db.execute('DELETE FROM movie WHERE id = ?', [req.params.id]);
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Film supprimé');
});

module.exports = router;
