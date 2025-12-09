//allows process.env prefix to env variables
require('dotenv').config()

//first get express functionality
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');


//all routers
const propertyRoutes = require('./routes/property');
const userRoutes = require('./routes/user');

//create instance of express - express app
const app = express();

//enable cors for frontend to communicate with backend
app.use(cors({
  origin: 'http://localhost:5173', // frontend's origin
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
}));

//allows req body to go through middleware
app.use(express.json());

//requests go through here before reaching actual endpoint
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); //moves to endpoint
})

app.use('/api/properties', propertyRoutes);

app.use('/api/users', userRoutes);

// nodemailer
// POST endpoint
app.post('/send-email', async (req, res) => {
  const { name, cellno, email, message } = req.body; // Destructure from req.body
  //console.log('Received data:', { name, email, message });
  if (!name || !cellno || !email || !message) {
    return res.status(400).json({ error: 'Missing fields!' });
  }

  const transporter = nodemailer.createTransport({
    host: 'mail.sjprop.co.za',
    port: 465,
    secure: true,
    auth: {
      user: 'centurion@sjprop.co.za',
      pass: 'pJmV2Xt3zam7'//'hibp rzqp ojlv pkxq', // Use app password
    },
  });

  const mailOptions = {
    from: email, // Sender name + email
    to: 'centurion@sjprop.co.za', // Recipient
    replyTo: email,
    subject: `Property inquiry from ${name}`,
    text: `Name: ${name}\nCellno: ${cellno}\n\n${message}`,
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    console.log(data);
    res.json({ success: true });
    console.log("Email sent sucessfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

//connect to db with mongoose
mongoose.connect(process.env.MONGO_URI)
    //only listen for requests once connected to db
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log("Connected to db & Listening on port ", process.env.PORT);
    });
    })
    .catch((error) => {
        console.log(error)
    })