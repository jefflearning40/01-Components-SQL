 const Joi = require("joi");

  const directorSchema = Joi.object({
    name:Joi.string().min(2).required(),
    firstName:Joi.string().min(2).required(),
    birthday: Joi.date(),
    
  });

  // Validation des données
  const { error, value } = directorSchema.validate(req.body);
  if (error) {
    res.status(400).send("Erreur de validation des données : " + error.details[0].message);
    return;
  }
  module.exports = directorSchema;