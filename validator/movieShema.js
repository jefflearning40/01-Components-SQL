 const Joi = require("joi");

  const movieSchema = Joi.object({
    title: Joi.string().min(2).required(),
    releaseDate: Joi.date(),
    duration: Joi.number().integer().min(1),
    note: Joi.number().integer().min(1).max(10),
    originCountry: Joi.string().alphanum().min(2).required(),
    id_director: Joi.number()
  });

  // Validation des données
  const { error, value } = movieSchema.validate(req.body);
  if (error) {
    res.status(400).send("Erreur de validation des données : " + error.details[0].message);
    return;
  }
  module.exports = movieSchema;