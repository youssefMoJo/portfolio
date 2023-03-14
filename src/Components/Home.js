import "../Styles/Home.css";
import { BiDownload } from "react-icons/bi";
import MyResume from "../Files/resume.pdf";

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
        </div>
      </div>
    </div>
  );
};

export default Home;
