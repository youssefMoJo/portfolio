import "../Styles/About.css";

const About = () => {
  return (
    <div id="aboutme" className="AboutContainer">
      <div className="AboutTitle">
        <span className="Hashtag">#</span> About Me
      </div>
      <div className="AboutParagraphContainer">
        <div className="AboutParagraphQuestionContainer">
          <img
            className="AboutChar"
            src={require("../Assets/whoAmI.png")}
            alt="Hi"
          />
          <h1 className="AboutParagraphQuestion">/Who am i?</h1>
        </div>
        <p className="AboutParagraph">
          Hi, I'm Youssef—a dedicated full-stack web developer and enthusiastic
          content creator. You'll often find me crafting engaging shorts on
          Facebook and Instagram, driven by a passion for exploring the
          intersection of technology and its potential to enhance our daily
          lives. Whether I'm immersed in coding or sharing insights on the
          profound impact of technology, I thrive on deepening my understanding
          and cultivating knowledge in every endeavor.
        </p>
        <p className="AboutParagraph">
          As a Train-the-Trainer Facilitator with techKNOWtutors at CSCNL since
          January 2024, I actively create curriculum and conduct workshops,
          empowering individuals with crucial digital skills in Newfoundland.
          Additionally, I collaborate with nonprofits and volunteers to secure
          the sustainability of digital skills initiatives, extending the impact
          far beyond the scope of techKNOWtutors.
        </p>
      </div>
    </div>
  );
};

export default About;
