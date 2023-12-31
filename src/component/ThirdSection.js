import React from "react";
import { TiPhoneOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function ThirdSection() {
  const handleNavigate = (uri) => {
    window.open(uri);
  };
  return (
    <div className="third" id="fourth">
      <div className="third-con">
        <div>
          <br />
          <br />
          <h1>
            {"<"}Contact Us{">"}
          </h1>
          <br />
          <p>Looking forward with enthusiasm to connect and hear from you</p>
          <br />
          <br />
          <p>
            <TiPhoneOutline
              size={20}
              color="#0f9b0f"
              style={{ marginRight: "3px" }}
            />
            Feel free to give me a call anytime
          </p>
          <p>+234 816 653 3430</p>
          <br />
          <p>
            <MdAlternateEmail
              size={20}
              color="#0f9b0f"
              style={{ marginRight: "3px" }}
            />
            Send me an Email
          </p>
          <p>ngbedejames415@gmail.com</p>
          <br />
          <span>
            <FaLinkedin
              className="icon"
              size={40}
              onClick={() =>
                handleNavigate(
                  "https://www.linkedin.com/in/james-samuel-8a3b21274"
                )
              }
            />
            <FaGithubSquare
              className="icon"
              size={40}
              onClick={() => handleNavigate("https://github.com/Blaspace")}
            />
          </span>
        </div>
        <form>
          <br />
          <br />
          <label>Full Name</label>
          <br />
          <input type="text" placeholder="Full Name..." />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input type="email" placeholder="Email..." />
          <br />
          <br />
          <label>Phone Number</label>
          <br />
          <input type="tel" placeholder="Phone Number..." />
          <br />
          <br />
          <label>Message</label>
          <br />
          <textarea placeholder="Message..." />
          <br />
          <br />
          <button>Send</button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default ThirdSection;
