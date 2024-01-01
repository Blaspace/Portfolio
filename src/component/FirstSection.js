import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";

function FirstSection() {
  const handleNavigate = (uri) => {
    window.open(uri);
  };
  return (
    <div className="first" id="first">
      <div className="first-con">
        <section>
          <h1>
            <small> {"<"}</small>About Me<small>{">"}</small>
          </h1>
          <br />
          <p data-aos="fade" data-aos-duration="500">
            Hey there, I'm James Ngbede Samuel, a full stack developer, With
            expertise in HTML/CSS, JavaScript, React.js, Node.js, Express.js,
            and MongoDB, I'm dedicated to crafting seamless web experiences that
            blend form and function.
            <br />
            My journey started with a passion for problem-solving through code.
            From sleek user interfaces to robust backends, I bring ideas to life
            with precision and creativity. I'm committed to staying ahead of
            industry trends and embracing new challenges.
            <br />
            When I'm not coding, I'm exploring emerging tech, enjoying a good
            book, or fueling my creativity.
            <br />
            Let's connect and shape the future through technology.
          </p>
          <br />
          <span>
            <FaLinkedin
              className="icon"
              onClick={() =>
                handleNavigate(
                  "https://www.linkedin.com/in/james-samuel-8a3b21274"
                )
              }
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <FaGithubSquare
              className="icon"
              onClick={() => handleNavigate("https://github.com/Blaspace")}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            />
          </span>
        </section>
        <section id="second">
          <div timing="0s" data-aos="fade-left" data-aos-duration="500">
            <AiOutlineHtml5 size={25} style={{ marginRight: "5px" }} />{" "}
            <p>Html/css</p>
          </div>
          <div timing="0.5s" data-aos="fade-left" data-aos-duration="500">
            <SiJavascript size={25} style={{ marginRight: "5px" }} />{" "}
            <p>JavaScript</p>
          </div>
          <div timing="1s" data-aos="fade-left" data-aos-duration="500">
            <FaReact size={25} style={{ marginRight: "5px" }} /> <p>React.js</p>
          </div>
          <div timing="1.5s" data-aos="fade-left" data-aos-duration="500">
            <FaNodeJs size={25} style={{ marginRight: "5px" }} />{" "}
            <p>Node.js/Express</p>
          </div>
          <div timing="2s" data-aos="fade-left" data-aos-duration="500">
            <SiMongodb size={25} style={{ marginRight: "5px" }} />{" "}
            <p>MongoDB</p>
          </div>
          <div timing="2.5s" data-aos="fade-left" data-aos-duration="500">
            <FaGit size={25} style={{ marginRight: "5px" }} /> <p>Git/GitHub</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FirstSection;
