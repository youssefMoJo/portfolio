import "../Styles/Home.css";
import { BiDownload } from "react-icons/bi";

const Home = () => {
  const placeholderText = [
    { type: "heading1", text: "HELLO My name is youssef" },
  ];

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
            Download Resume
            <BiDownload className="DownloadIcon" />
          </div>
        </div>
      </div>

      <div>Circle shape compnent</div>
    </div>
  );
};

export default Home;
