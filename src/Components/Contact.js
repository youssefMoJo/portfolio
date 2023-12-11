import "../Styles/Contact.css";
import ContactMeForm from "./ContactMeForm";

const Contact = () => {
  return (
    <div id="contact" className="ContactContainer">
      <div className="ContactTitle">
        <span className="Hashtag">#</span> Contact
      </div>

      <div className="ContactTitleContainer">
        <img
          className="ContactSittingImg"
          src={require("../Assets/contactSitting.png")}
          alt="Hi"
        />
      </div>
      <div className="ContactBoxContainer">
        <h1 className="ContactBoxTitle">Grab a Coffee and Let's Chat!</h1>
        <div className="contactConnectContainer">
          <a
            className="contactEmailButton"
            href="mailto: youssefraafat848@gmail.com"
          >
            <img
              className="contactEmailImg"
              src={require("../Assets/email.png")}
              alt="Hi"
            />
            youssefraafat848@gmail.com
          </a>
          <a className="contactPhoneButton" href="tel:+17092196251">
            <img
              className="contactPhoneImg"
              src={require("../Assets/phone.png")}
              alt="Hi"
            />
            +1 (709) 219-6251
          </a>
          <a
            className="contactLinkedinButton"
            href="https://www.linkedin.com/in/youssef-mohamed-812b4b18a/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="contactLinkedinImg"
              src={require("../Assets/linkedin.png")}
              alt="Hi"
            />
            My Linkedin
          </a>
          <a
            className="contactGithubButton"
            href="https://github.com/youssefMoJo"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="contactGithubImg"
              src={require("../Assets/github.png")}
              alt="Hi"
            />
            My GitHub
          </a>
        </div>
        <ContactMeForm />
      </div>
    </div>
  );
};

export default Contact;
