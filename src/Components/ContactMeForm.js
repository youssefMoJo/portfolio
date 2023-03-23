import "../Styles/ContactMeForm.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMeForm = () => {
  const form = useRef();
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8s9emog",
        "template_zg89kgx",
        form.current
        // "1ahAP2W-e2R8lTz5I"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message is sent");
          setName("");
          setEmail("");
          setMessage("");
          setIsActive(true);
          setTimeout(() => {
            getTheSendBtnAgain();
          }, 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const getTheSendBtnAgain = () => {
    setIsActive(false);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const chaneEmail = (e) => {
    setEmail(e.target.value);
  };

  const chaneMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="ContactMeFormContainer">
      <img
        className="contactStand"
        src={require("../Assets/contactStand.png")}
        alt="Hi"
      />
      <form ref={form} onSubmit={sendEmail}>
        <label className="labels">Name</label>
        <input
          required
          type="text"
          name="user_name"
          onChange={changeName}
          value={name}
        />

        <label className="labels">Email</label>
        <input
          required
          type="email"
          name="user_email"
          onChange={chaneEmail}
          value={email}
        />
        <label className="labels">Message</label>
        <textarea
          required
          name="message"
          onChange={chaneMessage}
          value={message}
        />
        <button
          className={isActive ? "active" : ""}
          id="sendBtn"
          type="submit"
          value="Send"
        >
          <p id="btnText">{isActive ? "Sent" : "Send"}</p>
          <div className="check-box">
            <svg
              className="svgContactForm"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path
                className="svgPathContactForm"
                fill="transparent"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactMeForm;
