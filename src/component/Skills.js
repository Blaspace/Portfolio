import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si'


function Skills() {
  return (
    <div className='skills-con'>
        <h1>{"<"}Technical Skills{">"}</h1>
        <br/>
        <br/>
        <br/>
      <div className='skills'>
      <div timing="0s" data-aos="fade-left" data-aos-duration="500">
            <AiOutlineHtml5 size={25} style={{ marginRight: "5px" }} />{" "}
            <p>Html/css</p>
          </div>
          <div timing="0.5s" data-aos="fade-left" data-aos-duration="500">
            <SiJavascript size={25} style={{ marginRight: "5px" }} />{" "}
            <p>JavaScript</p>
          </div>
          <div timing="1s" data-aos="fade-left" data-aos-duration="500">
            <SiTypescript size={24} style={{ marginRight: "5px" }} /><p>Typescript</p>
          </div>
          <div timing="1.5s" data-aos="fade-left" data-aos-duration="500">
            <FaReact size={25} style={{ marginRight: "5px" }} /> <p>React.js</p>
          </div>
          <div timing="2s" data-aos="fade-left" data-aos-duration="500">
            <SiTailwindcss size={25} style={{ marginRight: "5px" }} /> <p>Tailwind</p>
          </div>
          <div timing="2.5s" data-aos="fade-left" data-aos-duration="500">
            <FaNodeJs size={25} style={{ marginRight: "5px" }} />{" "}
            <p>Node.js/Express</p>
          </div>
          <div timing="3s" data-aos="fade-left" data-aos-duration="500">
            <SiMongodb size={25} style={{ marginRight: "5px" }} />{" "}
            <p>MongoDB</p>
          </div>
          <div timing="3.5s" data-aos="fade-left" data-aos-duration="500">
            <FaGit size={25} style={{ marginRight: "5px" }} /> <p>Git/GitHub</p>
          </div>
    </div>
    </div>
  )
}

export default Skills
