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
            👋 Hey there! I’m a Full-Stack Developer with 5+ years of hands-on
            experience building powerful, user-friendly web applications. I
            specialize in the MERN stack and love creating end-to-end solutions
            for platforms in EduTech, e-commerce, social tech and more.
            <br />
            Whether it’s crafting sleek front-ends or designing robust back-end
            systems, I’m all about performance, security, and a smooth user
            experience. I enjoy working with modern tools and turning great
            ideas into real, scalable products.
            <br />
            Let’s connect and build something awesome together! 🚀
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
            style={{
              objectFit: "cover",
              zIndex: "2",
              filter: "grayscale(100%)",
            }}
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="100"
          />
          <img
            src={img}
            alt="James Ngbede Samuel"
            width={"100%"}
            height={"500px"}
            style={{
              objectFit: "cover",
              position: "absolute",
              right: "10px",
              top: "20px",
              opacity: "0.5",
              zIndex: "-1",
              filter: "grayscale(100%)",
            }}
            data-aos="fade-left"
            data-aos-duration="2500"
            data-aos-delay="150"
          />
          <img
            src={img}
            alt="James Ngbede Samuel"
            width={"100%"}
            height={"500px"}
            style={{
              objectFit: "cover",
              position: "absolute",
              right: "20px",
              top: "20px",
              opacity: "0.3",
              zIndex: "-1",
              filter: "grayscale(100%)",
            }}
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
