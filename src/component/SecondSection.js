import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import youfeat from "../public/youfeat.PNG";
import blogy from "../public/blogApp.jpg";
import webc from "../public/webc.PNG";
import color from "../public/color.PNG";
import admin from "../public/admin.PNG";
import news from "../public/news.PNG";

function SecondSection() {
  const fullStackProjects = [
    {
      name: "News Website",
      url: "https://newsweb-i8wp.onrender.com",
      about:
        "News Scraper App is a dynamic web application that leverages the power of React and Node.js to fetch and display real-time news from CNN. The application seamlessly integrates a web scraper, built using Node.js, to gather the latest news articles from CNN's website. The collected data is then presented in a user-friendly interface crafted with React.",
      skills: ["React.js", "Node.js", "Express", "CSS"],
      img: news,
    },
    {
      name: "YouFeat",
      url: "https://youfeat.ng",
      git: "",
      about:
        "YouFeat is a dynamic and engaging online platform designed to host talent competitions, providing a stage for individuals to showcase their unique abilities. Developed using ReactJS for the front end, NodeJS and ExpressJS for the backend, and MongoDB for data storage, this project seamlessly integrates technology and creativity to create an immersive user experience.",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "CSS"],
      img: youfeat,
    },
    {
      name: "Employee Managment App",
      url: "https://management-81es.onrender.com/",
      git: "",
      about:
        "Welcome to our Employee Management Application, a powerful tool designed to streamline employee management, boost productivity, and enhance collaboration. Whether you're an employee or a manager, our platform has something to offer for everyone.",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "CSS"],
      img: admin,
    },
    {
      name: "Blogy",
      url: "https://blog-app-client-73he.onrender.com",
      git: "",
      about:
        "Here is a social media web application, built with React.js, Node.js, Express.js and MongoDB, that allows users connect in a secure and user-friendly environment. By providing essential features such as post editing, profile customization, and robust user authentication.",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "CSS"],
      img: blogy,
    },
  ];

  const handleNavigate = (uri) => {
    window.open(uri);
  };

  const frontEndProjects = [
    {
      name: "Company Landing Page",
      url: "https://company-cyi0.onrender.com",
      git: "https://github.com/Blaspace/wed.git",
      about:
        "The goal of this project is to create a unique, visually appealing, and informative website using Reactjs that would reflect both my technical expertise and my creative design sensibilities. I also integrated stripe into the application to showcase my ability to work with apis.",
      skills: ["React.js", "CSS"],
      img: webc,
    },

    {
      name: "Landing Page",
      url: "https://colorweb.onrender.com",
      git: "https://github.com/Blaspace/wed.git",
      about:
        "The goal of this project is to create a unique, visually appealing, and informative website using Reactjs that would reflect both my technical expertise and my creative design sensibilities.",
      skills: ["React.js", "CSS"],
      img: color,
    },
  ];

  return (
    <div className="second" id="third">
      <div className="second-con">
        <h1>
          <small>{"<"}</small>My Projects<small>{">"}</small>
        </h1>
        <h3>Front-end</h3>
        <br />
        <br />
        {frontEndProjects.map((value, i) => {
          return (
            <div className="project" key={i}>
              <div>
                <img
                  src={value.img}
                  alt="project"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
              </div>
              <section>
                <h2 data-aos="fade-left" data-aos-duration="1000">
                  {value.name}
                </h2>
                <br />
                <p>{value.about}</p>
                <br />
                <ul>
                  {value.skills.map((v, x) => {
                    return (
                      <li
                        key={x}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={`${x}00`}
                      >
                        {v}
                      </li>
                    );
                  })}
                </ul>
                <br />
                <button onClick={() => handleNavigate(value.url)}>
                  <CgWebsite /> Visit
                </button>
              </section>
            </div>
          );
        })}
        <h3>Full-stack</h3>

        <div className="all-projects">
          {fullStackProjects.map((value, i) => {
            return (
              <div className="project" key={i}>
                <div alt="project" data-aos="zoom-in" data-aos-duration="1000">
                  <img src={value.img} alt="project" />
                </div>
                <section>
                  <h2 data-aos="fade-left" data-aos-duration="1000">
                    {value.name}
                  </h2>
                  <br />
                  <p>{value.about}</p>
                  <br />
                  <ul>
                    {value.skills.map((v, x) => {
                      return (
                        <li
                          key={x}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay={`${x}00`}
                        >
                          {v}
                        </li>
                      );
                    })}
                  </ul>
                  <br />
                  <button onClick={() => handleNavigate(value.url)}>
                    <CgWebsite /> Visit
                  </button>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
