const Joi=require("joi");
const userShema = Joi.object({
    title:Joi.string().alphanum().min(2).require(),
    releaseDate:Joi.number().integer().min(1900).max(date.now),
    duration:Joi.number().integer().min(1),
    note:Joi.number().integer().min(1) .max(10),
    originCountry:Joi.string().alphanum().min(2).require()
})

//Validation données :
const {err,value}=userShema.validate(req.body.movie)
if(err){
res.send("erreur validation donnée")
} 