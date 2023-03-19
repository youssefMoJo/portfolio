import "../Styles/Home.css";
import { BiDownload } from "react-icons/bi";
import MyResume from "../Files/resume.pdf";
import { SlSocialLinkedin } from "react-icons/sl";

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="LeftSideContainer">
        <div className="SideDecorationCircleShape">
          <div className="SideDecorationLineShape"></div>
        </div>

        <div>
          <h1 className="Hello">HELLO</h1>
          <h2 className="MyNameSentence">
            I Am <span className="MyName">Youssef Mohamed</span>
          </h2>
          <h2 className="Title">Full Stack Developer</h2>
          <div className="ResumeButtonContainer">
            <a className="ResumeButton" href={MyResume}>
              Download Resume
            </a>
            <a href={MyResume}>
              <BiDownload className="DownloadIcon" />
            </a>
          </div>
        </div>
      </div>

      <div className="RightSideContainer">
        <div className="TransparentCircleShape">
          <img
            className="HiChar"
            src={require("../Assets/HiChar.png")}
            alt="Hi"
          />
          <img
            className="HiWord"
            src={require("../Assets/HiWord.png")}
            alt="Hi"
          />
          <div className="smallCirleCodeDesign">
            <div className="codeSign">{`</`}</div>
          </div>
          <a
            className="smallCirleLinkedinSign"
            href="https://www.linkedin.com/in/youssef-mohamed-812b4b18a/"
            rel="noreferrer"
            target="_blank"
          >
            in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
