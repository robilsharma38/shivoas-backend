const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your.email@gmail.com', // Your Gmail email address
    pass: 'yourpassword' // Your Gmail password
  }
});

// Define a function to send an email
async function sendMail() {
  // Create email message options
  const mailOptions = {
    from: 'your.email@gmail.com', // Sender address
    to: 'recipient@example.com', // List of recipients
    subject: 'Test Email', // Subject line
    text: 'Hello from Node.js!' // Plain text body
  };

  // Send mail with defined transport object
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the function to send the email
sendMail();
