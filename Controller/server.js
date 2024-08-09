const express = require('express');
const { engine } = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path'); 
const cors = require('cors');

const app = express();

app.use(cors());

app.engine('handlebars', engine()); // Use 'engine()' from 'express-handlebars'
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('home');
});

app.post('/send', (req, res) => {
  const output = `
    <p>New Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ansonjiang043@gmail.com",
      pass: "pppt pdoy qkft yvju", 
    },
  });

  const mailOptions = {
    from: '"NodeMailer" <your-email@gmail.com>',
    to: 'recipient-email@example.com', 
    subject: 'Contact Form Submission',
    text: 'You have a new contact form submission',
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error occurred:', error.message);
    }
    console.log('Message sent successfully:', info.response);
    res.send('Email sent successfully!');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
