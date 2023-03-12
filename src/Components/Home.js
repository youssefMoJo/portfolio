import "../Styles/Home.css";
import { BiDownload } from "react-icons/bi";
import MyResume from "./resume.pdf";

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
          <div className="ResumeButton">
            <a href={MyResume}>Download Resume</a>

            <BiDownload className="DownloadIcon" />
          </div>
        </div>
      </div>

      <div>Circle shape compnent</div>
    </div>
  );
};

export default Home;
