import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import "./Contact.css";
import "../../App.css";
import Send from "../../utils/send";
import SocialsIg from "../../utils/SocialsIg";
import SocialsGh from "../../utils/SocialsGh";
import SocialsLi from "../../utils/SocialsLi";
import { sendMail } from "../../services";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    token: "",
  });
  const reRef = useRef();
  const { REACT_APP_SITE_KEY } = process.env;

  // ------------ handle input change, store in formData variable --------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // --------------- handle submit and check form validation ------------------

  const notifyError = () => {
    toast.error("Please fill out all fields before sending message, thanks!");
  };

  const handleValidation = () => {
    if (
      formData.subject === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      notifyError();
      return;
    } else {
      const token = await reRef.current.executeAsync();
      reRef.current.reset(); // resets token for next verification

      await toast.promise(
        sendMail({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          captcha: token,
        }),
        {
          pending: "Sending....",
          success: "Email sent! Thank you!",
          error: "Something went wrong, please try again.",
        }
      );
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="page-max">
      <header className="contact-header page-max">
        <h2 className="contact title">Contact</h2>
      </header>
      <main className="page-max">
        <div className="contact-container">
          <div className="contact-left">
            <p className="contact-helper-text">
              To avoid getting added to any spam lists, I've included my email
              address as an image below. If you'd like to type that in and reach
              out that way feel free! Otherwise, the form here will achieve the
              same result.
            </p>
            <div className="email-image"></div>
            <div className="contact-socials">
              <p className="social-helper">Find me on the socials</p>
              <div className="social-logos">
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/katherine-boates-goudreau/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialsLi />
                </a>
                <a
                  className="social-link"
                  href="https://www.instagram.com/metlgrl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialsIg className="social-middle" />
                </a>
                <a
                  className="social-link"
                  href="https://github.com/ktbg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialsGh />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-form-container">
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                method="POST"
              >
                <label name="email">
                  <input
                    className="single-line-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  ></input>
                </label>
                <label name="subject">
                  <input
                    className="single-line-input"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    placeholder="Subject"
                    onChange={handleChange}
                    required
                  ></input>
                </label>
                <label>
                  <textarea
                    className="text-area"
                    type="text-area"
                    name="message"
                    value={formData.message}
                    placeholder="What would you like to say?"
                    rows="6"
                    cols="44"
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="send-btn"
                  onClick={(e) => handleSubmit(e)}
                >
                  Send Message <Send />
                </button>
                <div className="recaptcha-box">
                  <ReCAPTCHA
                    sitekey={REACT_APP_SITE_KEY}
                    size="invisible"
                    ref={reRef}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
