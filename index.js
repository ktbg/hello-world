import fetch from "node-fetch";
import express from "express";
import logger from "morgan";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: "https://www.allaboatesgoudreau.com ",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(logger("dev"));

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

app.post("/send", cors(corsOptions), async function (req, res) {
  const human = await validateHuman(req.body.captcha);
  if (!human) {
    res.status(400);
    res.json({ errors: ["Not today bot!"] });
    return;
  }

  let mailOptions = {
    from: "hello@allaboatesgoudreau.com",
    to: "hello@allaboatesgoudreau.com",
    subject: "Contact Form Submission",
    html: `
          <h1>${req.body.subject}</h1>
          <p>From: ${req.body.email}</p>
          <p>Message: ${req.body.message}</p>`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.json({ status: "email sent" });
    }
  });
});

// nodemailer verify function for testing transporter connection on server start
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("transporter.verify", success);
  }
});
