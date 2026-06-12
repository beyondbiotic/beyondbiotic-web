require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors     = require('cors');
const Contact  = require('./contactModel');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));


// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: 'Name, email and message are required.' });

  try {
    // Save to MongoDB
    await Contact.create({ name, email, phone, message });

    // Send email
    await transporter.sendMail({
      from: `"Beyond Biotic Contact" <${process.env.GMAIL_USER}>`,
      to:   process.env.RECIPIENT_EMAIL,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
