//allows process.env prefix to env variables
require('dotenv').config()

//first get express functionality
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

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
app.use(express.urlencoded({ extended: true }));

//requests go through here before reaching actual endpoint
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); //moves to endpoint
});

app.get('/', (req, res) => {
  res.send("SJProp backend is running...");
});

// nodemailer
// POST endpoint
app.post('/send-email', async (req, res) => {
  console.log("REQ BODY:", req.body);

  const { name, cellno, email, message } = req.body; // Destructure from req.body
  //console.log('Received data:', { name, email, message });
  if (!name || !cellno || !email || !message) {
    return res.status(400).json({ error: 'Missing fields!' });
  }

  /*
  const transporter = nodemailer.createTransport({
    host: 'mail.sjprop.co.za',
    port: 465,
    secure: true,
    auth: {
      user: 'centurion@sjprop.co.za',
      pass: 'pJmV2Xt3zam7'//'hibp rzqp ojlv pkxq', // Use app password
    },
  });
  */

  const mailOptions = {
    from: '"SJProp Website" <onboarding@resend.dev>',
    to: ['centurion@sjprop.co.za'], // Recipient
    subject: `Property inquiry from ${name}`,
    html: '<h1>If this works...</h1>'/*`Name: ${name}\nCellno: ${cellno}\n\n${message}`*/,
  };

  try {
    const { data, error } = await resend.emails.send(mailOptions);
    res.json({ success: true });
    console.log(data);
    console.log(error);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log("Listening on port ", PORT);
});