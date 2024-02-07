// emailController.js
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net', // GoDaddy's SMTP server
    port: 465, // Port for secure SMTP (SSL)
    secure: true, // Use SSL
    auth: {
      user: 'info@shivoas.com', // Your email address on GoDaddy
      pass: 'mahadevcompany@123' // Your email password
    }
  });

// Controller function to send an email
async function sendEmail(req, res) {
  const { name,userEmail,message,phoneNumber } = req.body;
  const subject = `Thanks for connecting : ${name}`;
  // Create email message options
  const mailOptions = {
    from: 'info@shivoas.com', // Sender address
    to: 'robil.sharma38@gmail.com', // Recipient(s)
    subject: subject, // Subject line
    phoneNumber: phoneNumber, // Phone Number
    text: message // Plain text body
  };

  // Send mail with defined transport object
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}

module.exports = {
  sendEmail
};
