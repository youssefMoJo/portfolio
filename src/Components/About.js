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
          I am a strong believer in the importance of communication and
          collaboration. I strive to be honest, respectful, kind, and reliable
          in my interactions with others, and I always enjoy a good conversation
          to learn about the experiences and perspectives of my peers. I also
          value the importance of teamwork and having fun in the workplace.
        </p>
      </div>
    </div>
  );
};

export default About;
