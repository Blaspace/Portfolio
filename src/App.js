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
