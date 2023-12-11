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
          I graduated with a Bachelor's degree in Computer Science in December
          2022, and over the last five years of my academic journey, I have
          cultivated a diverse set of skills in coding and development. My
          eagerness to tackle new challenges has led me to successfully complete
          various independent courses and undertake projects utilizing a wide
          range of technologies. I am confident in my ability to bring valuable
          contributions to any endeavor.
        </p>
        <p className="AboutParagraph">
          I prioritize open communication, collaboration, and a positive
          workplace environment. My interactions are guided by honesty, respect,
          kindness, and reliability, as I value learning from the diverse
          experiences of my peers.
        </p>
      </div>
    </div>
  );
};

export default About;
