const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const emailController = require('../controllers/emailController')

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your.email@gmail.com', // Your Gmail email address
      pass: 'yourpassword' // Your Gmail password
    }
  });

// Define routes
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.post('/send-email', emailController.sendEmail);
  

module.exports = router;
