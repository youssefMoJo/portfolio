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
          I have a Bachelor's degree in Computer Science, which I completed in
          December 2022. I have acquired a vast array of skills over the past 5
          years through my studies in coding and development. My enthusiasm for
          new challenges has driven me to complete multiple independent courses
          and develop projects with a range of technologies. I am confident that
          I have a great deal to offer.
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
