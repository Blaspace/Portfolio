import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
//import youfeat from "../public/youfeat.PNG";
//import blogy from "../public/blogApp.jpg";
import webc from "../public/company.PNG";
//import color from "../public/color.PNG";
//import admin from "../public/admin.PNG";
import news from "../public/BBC.png";
import movie from "../public/movie.PNG";
import ecom from "../public/ecommerce.PNG";
import school from "../public/schoolapp.png";

function SecondSection() {
  const fullStackProjects = [
    {
      name: "School Management Application",
      url: "https://school-manager-o95d.onrender.com",
      git: "https://github.com/Blaspace/school_manager",
      about:
        "Developed a comprehensive school management application that enables schools to efficiently manage their operations, including student and teacher administration, billing, and communication",
      img: school,
      skills: ["React.js", "Node.js", "Express", "CSS", "Stripe", "MongoDB"],
    },
    {
      name: "Myflix",
      url: "https://movie-nzm2.onrender.com",
      git: "https://github.com/Blaspace/movie-app",
      about:
        "Myflix is an immersive web application that seamlessly combines the power of Node.js and React to create a dynamic and user-friendly movie browsing experience. This platform enables users to explore a diverse range of movie categories and download their favorite films with ease.",
      img: movie,
      skills: ["React.js", "Node.js", "Express", "CSS"],
    },
    {
      name: "ShopSmart",
      url: "https://shopsmart-razv.onrender.com",
      git: "https://github.com/Blaspace/e-commerce",
      about:
        "I recently developed a dynamic e-commerce store, showcasing my expertise in web development and design. The platform seamlessly integrates user-friendly navigation with a visually appealing interface, ensuring a smooth and enjoyable shopping experience. I aimed to provide a robust and accessible online storefront. Through this project, I demonstrated my proficiency in crafting functional and aesthetically pleasing websites that meet the demands of modern e-commerce standards.",
      skills: ["React.js", "CSS", "Node.js", "Express", "Stripe"],
      img: ecom,
    },
    {
      name: "News Website",
      url: "https://bbcnews-ffpb.onrender.com",
      git: "https://github.com/Blaspace/news",
      about:
        "News Scraper App is a dynamic web application that leverages the power of Node.js to fetch and display real-time news from BBC. The application seamlessly integrates a web scraper, built using Node.js, to gather the latest news articles from BBC's website. The collected data is then presented in a user-friendly interface crafted with EJS.",
      skills: ["React.js", "Node.js", "Express", "CSS"],
      img: news,
    },
    /* {
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
    },*/
  ];

  const handleNavigate = (uri) => {
    window.open(uri);
  };

  const frontEndProjects = [
    {
      name: "Company Landing Page",
      url: "https://guildev-ibuq.onrender.com",
      git: "https://github.com/Blaspace/guildev.git",
      about:
        "Designed and developed a professional static website for Guildev, a web development agency. The website effectively showcases the company's services, expertise, and portfolio, offering a seamless user experience with a modern, responsive design.",
      skills: ["React.js", "CSS"],
      img: webc,
    },
  ];

  return (
    <div className="second" id="third">
      <div className="second-con">
        <h1>
          <small>{"<"}</small>My Projects<small>{">"}</small>
        </h1>

        <h3>Full-stack</h3>

        <div className="all-projects">
          {fullStackProjects.map((value, i) => {
            return (
              <div className="project" key={i}>
                <div alt="project" data-aos="zoom-in" data-aos-duration="1000">
                  <img src={value.img} alt="project" loading="lazy" />
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
                  <button
                    onClick={() => handleNavigate(value.url)}
                    className="project-btn"
                  >
                    <CgWebsite /> Visit
                  </button>
                  <button
                    onClick={() => handleNavigate(value.git)}
                    className="project-btn2"
                  >
                    <IoLogoGithub /> Github
                  </button>
                </section>
              </div>
            );
          })}
          {frontEndProjects.map((value, i) => {
            return (
              <div className="project" key={i}>
                <div>
                  <img
                    src={value.img}
                    alt="project"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    loading="lazy"
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
                  <button
                    onClick={() => handleNavigate(value.url)}
                    className="project-btn"
                  >
                    <CgWebsite /> Visit
                  </button>
                  <button
                    onClick={() => handleNavigate(value.git)}
                    className="project-btn2"
                  >
                    <IoLogoGithub /> Github
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
