const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Your email address
        pass: 'your_password' // Your email password or an application-specific password
    }
});

const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com', // Recipient's email address
    subject: 'New Message from Your Website',
    text: 'This is a test message from your website.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
