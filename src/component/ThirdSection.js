import React, { useRef } from "react";
import { TiPhoneOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ThirdSection() {
  const firstName = useRef();
  const email = useRef();
  const number = useRef();
  const message = useRef();

  const handleNavigate = (uri) => {
    window.open(uri);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ras6ajn",
        "template_0otu6tj",
        form.current,
        "-EKLMNlWVDcoczk7f"
      )
      .then(
        (result) => {
          number.current.value = "";
          email.current.value = "";
          firstName.current.value = "";
          message.current.value = "";
          alert(
            "Hello, thanks for contacting me, your message has been received I will get back to you shortly"
          );
        },
        (error) => {
          alert("oops, sorry something went wrong please try again");
        }
      );
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
        <form onSubmit={sendEmail}>
          <br />
          <br />
          <label>Full Name</label>
          <br />
          <input
            type="text"
            ref={firstName}
            placeholder="Full Name..."
            name="firstName"
            required
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Email..."
            ref={email}
            name="email"
            required
          />
          <br />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            type="tel"
            ref={number}
            placeholder="Phone Number..."
            name="number"
            required
          />
          <br />
          <br />
          <label>Message</label>
          <br />
          <textarea
            placeholder="Message..."
            name="message"
            required
            ref={email}
          />
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
