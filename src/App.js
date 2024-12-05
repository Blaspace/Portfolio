import React, { useEffect } from "react";
import Header from "./component/Header";
import Nav from "./component/Nav";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import Footer from "./component/Footer";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    fetch("https://school-managment-server.onrender.com/")
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch("https://bbcnews-ffpb.onrender.com/")
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch("https://movie-app-nqr1.onrender.com/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <Nav />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default App;
