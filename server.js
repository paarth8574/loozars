// Import necessary modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Initialize the express app
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up your email credentials (you can use your email service provider's SMTP credentials)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Example: using Gmail
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password', // Consider using environment variables for sensitive info
    },
});

// Define the route to handle the form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Create email options
    const mailOptions = {
        from: email,
        to: 'contact@loozars.com', // Replace with your contact email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Message sent successfully!');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
