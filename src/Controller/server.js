const express = require('express');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer'); 

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static())

app.get('/', (req, res) => {
  res.send('home'); // Render the 'home' view using Handlebars
});








//middleware
app.use(express.json())
