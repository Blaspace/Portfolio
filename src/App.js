import React from "react";
import Header from "./component/Header";
import Nav from "./component/Nav";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import Footer from "./component/Footer";

function App() {
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
