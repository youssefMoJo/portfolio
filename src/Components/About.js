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
          Hi, I'm Youssef—a dedicated full-stack developer and enthusiastic
          content creator. I love crafting engaging short-form content on social
          media, driven by a passion for exploring how technology can enhance
          our daily lives. Whether immersed in coding or sharing insights on the
          transformative power of tech, I thrive on expanding my knowledge and
          contributing to meaningful projects.
        </p>
        <p className="AboutParagraph">
          I'm always eager to deepen my understanding of the latest technologies
          and find innovative ways to solve problems, whether in development or
          digital content creation. My goal is to continuously grow and use my
          skills to make a positive impact in the tech space.
        </p>
      </div>
    </div>
  );
};

export default About;
