import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import img from "../public/james.png";

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
            Experienced and results-oriented Full-Stack Developer with over 4
            years of proven success in designing, building, and maintaining
            scalable web applications. Specialized in the MERN stack, delivering
            end-to-end solutions for diverse domains such as EduTech,
            e-commerce, and social platforms. Proficient in integrating modern
            technologies and ensuring high performance, security, and user
            satisfaction.
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
        <section id="second" data-aos="fade-up" data-aos-duration="1000">
        <img
            src={img}
            alt="James Ngbede Samuel"
            width={"100%"}
            height={"500px"}
            style={{ objectFit: "cover",zIndex: "2",filter:"grayscale(100%)"}}
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="100"
          />
        <img
            src={img}
            alt="James Ngbede Samuel"
            width={"100%"}
            height={"500px"}
            style={{ objectFit: "cover", position: "absolute", right:"10px", top: "20px", opacity: '0.5', zIndex: '-1', filter:"grayscale(100%)"}}
            data-aos="fade-left"
            data-aos-duration="2500"
            data-aos-delay="150"
          />
          <img
            src={img}
            alt="James Ngbede Samuel"
            width={"100%"}
            height={"500px"}
            style={{ objectFit: "cover", position: "absolute", right:"20px", top: "20px", opacity: '0.3', zIndex: '-1', filter:"grayscale(100%)"}}
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="150"
          />
        </section>
      </div>
    </div>
  );
}

export default FirstSection;
