import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

function SecondSection() {
  const fullStackProjects = [
    {
      name: "Real Estate Investment Website",
      url: "https://youfeathomes.com.ng",
      about:
        "Led the end-to-end development and deployment of a real estate investment platform as a full-stack developer and consultant. Collaborated with stakeholders to translate business requirements into a scalable web solution, integrating secure payment systems and building robust admin tools. Then follow it with the detailed experience",
      img: require('../public/real.png'),
      skills: ["React.js", "Node.js", "Express", "CSS", "Stripe", "MongoDB"],
    },
    {
      name: "Restaurant Portal",
      url: "https://restaurant-aosa.onrender.com",
      git: "https://github.com/Blaspace/restaurant",
      about:
        "Developed a full-stack web app enabling users to discover and order from local restaurants based on their location. The platform integrates real-time geolocation tracking, restaurant listings, and a secure payment gateway for a seamless food ordering experience.",
      img: require('../public/food.png'),
      skills: ["React.js", "Node.js", "Express", "CSS", "Paystack", "MongoDB"],
    },
    {
      name: "School Management Application",
      url: "https://school-manager-o95d.onrender.com",
      git: "https://github.com/Blaspace/school_manager",
      about:
        "Developed a comprehensive school management application that enables schools to efficiently manage their operations, including student and teacher administration, billing, and communication",
      img: require('../public/schoolNew.png'),
      skills: ["React.js", "Node.js", "Express", "CSS", "Stripe", "MongoDB"],
    },
    
{
      name: "Myflix",
      url: "https://movie-nzm2.onrender.com",
      git: "https://github.com/Blaspace/movie-app",
      about:
        "Myflix is an immersive web application that seamlessly combines the power of Node.js and React to create a dynamic and user-friendly movie browsing experience. This platform enables users to explore a diverse range of movie categories and download their favorite films with ease.",
      img: require('../public/movieNew.png'),
      skills: ["React.js", "Node.js", "Express", "CSS"],
    },
    {
      name: "ShopSmart",
      url: "https://shopsmart-razv.onrender.com",
      git: "https://github.com/Blaspace/e-commerce",
      about:
        "I recently developed a dynamic e-commerce store, showcasing my expertise in web development and design. The platform seamlessly integrates user-friendly navigation with a visually appealing interface, ensuring a smooth and enjoyable shopping experience. I aimed to provide a robust and accessible online storefront. Through this project, I demonstrated my proficiency in crafting functional and aesthetically pleasing websites that meet the demands of modern e-commerce standards.",
      skills: ["React.js", "CSS", "Node.js", "Express", "Stripe"],
      img: require('../public/econ.png'),
    },
  ];

  const handleNavigate = (uri) => {
    window.open(uri);
  };

  const frontEndProjects = [
    {
      name: "Company Landing Page",
      url: "https://guilders.com.ng",
      git: "https://github.com/Blaspace/guildev.git",
      about:
        "Designed and developed a professional static website for Guildev, a web development agency. The website effectively showcases the company's services, expertise, and portfolio, offering a seamless user experience with a modern, responsive design.",
      skills: ["React.js", "CSS"],
      img: require('../public/comp.png'),
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
