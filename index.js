import fetch from "node-fetch";
import express from "express";
import logger from "morgan";
import cors from "cors";
import nodemailer from "nodemailer";
import {} from "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// ---------- recaptcha validation -------------------------

async function validateHuman(token) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success;
}

// ---- sets up mail server for communication with form in application --

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

// route to send mail, called from client/services/index.js

app.post("/send", async function (req, res) {
  // checks reCaptcha verification
  const human = await validateHuman(req.body.captcha);
  if (!human) {
    res.status(400);
    res.json({ errors: ["Not today bot!"] });
    return;
  }
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

// nodemailer verify function for testing

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log(success);
  }
});
