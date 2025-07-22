const express = require('express');

const app = express();
const filmsRoutes = require('./films');

//const dotenv=require('dotenv').config()
//dotenv.config()

app.use(express.json());
app.use('/films', filmsRoutes);


app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
