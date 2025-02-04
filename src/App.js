import React, { useEffect } from "react";
import Header from "./component/Header";
import Nav from "./component/Nav";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import Footer from "./component/Footer";
import "aos/dist/aos.css";
import Aos from "aos";
import Skills from "./component/Skills";

function App() {
  useEffect(() => {
    fetch("https://school-managment-server.onrender.com/")
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch("https://bbcnews-ffpb.onrender.com/")
      .then((data) => console.log(data));
    fetch("https://movie-app-nqr1.onrender.com/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  fetch("https://stripeapi-vuet.onrender.com")
  .then(res=>res.json())
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Nav />
      <Header />
      <FirstSection />
      <Skills/>
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default App;
