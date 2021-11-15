const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

const nodemailer = require("nodemailer");
require("dotenv").config();

// ---------- recaptcha validation -------------------------

// const validateHuman = async (token) => {
//   const res = await axios.post(
//     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
//   );
//   console.log(res);
//   return false;
// };

// // ---------- validation check before we even get to send ----------------
// const sendValidation = async (req, res) => {
//   const human = await validateHuman(req.body.token);
//   console.log(human);
//   console.log(res);
//   if (!human) {
//     console.log("not today bot!");
//     return;
//   }
//   console.log("successful token");
// };
// // ---- sets up mail server for communication with form in application ---

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.HOST_PORT,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.SECRET,
  },
  secureConnection: false,
  tls: {
    ciphers: "SSLv3",
  },
});

// ====================== THIS VERSION WORKS TO SEND EMAIL W/O 404 ERROR ========================
// route to send mail, called from client/services/index.js
app.post("/send", async function (req, res) {
  // my default email format for any contact form request that comes through
  let mailOptions = {
    from: "hello@allaboatesgoudreau.com",
    to: "hello@allaboatesgoudreau.com",
    subject: "Contact Form Submission",
    html: `
      <h1>${req.body.subject}</h1>
      <p>From: ${req.body.email}</p>
      <p>Message: ${req.body.message}</p>`,
  };

  // nodemailer sendMail function
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.json({ status: "email sent" });
    }
  });
});
// =============================================================================================

// nodemailer verify function for testing

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log(success, "Yes this is truly working now");
  }
});
