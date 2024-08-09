const express = require('express');
const { engine } = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

<<<<<<< Updated upstream
app.engine('handlebars', engine()); // Use 'engine()' from 'express-handlebars'
app.set('view engine', 'handlebars');

=======
// Set up Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Serve static files from the 'public' directory
>>>>>>> Stashed changes
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
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
<<<<<<< Updated upstream
    to: 'recipient-email@example.com', 
=======
    to: 'recipient-email@example.com',
>>>>>>> Stashed changes
    subject: 'Contact Form Submission',
    text: 'You have a new contact form submission',
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error.message);
      return res.status(500).send('Error sending email');
    }
    console.log('Message sent successfully:', info.response);
    res.send('Email sent successfully!');
  });
});

// Serve React static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
