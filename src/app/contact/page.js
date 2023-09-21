import React from "react";
import Image from "next/image";
import Header from "../components/header";
import style from "./contact.module.css";
import logo from "../images/anoop1.jpeg";

const Contact = () => {
  return (
    <div className={style.outer_div}>
      <div style={{ height: "5rem" }}></div>
      <h1 className={style.heading}>Developer (anoop chaudhary)</h1>
      <div className={style.first}>
        <div className={style.first1}>
          <Image
            src={logo}
            height={450}
            width={450}
            style={{
              borderRadius: "225px",
              marginLeft: "40px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className={style.first2}>
          <h1>About me</h1>
          <p>
            IIEC National Hackathon Winner , GDSC National Hackathon Winner ,
            Web-App National Hackathon Winner , Hack-Day NationWide event 3rd
            Winner
          </p>
          <p>Full Stack Android Ios and web Developer </p>
          <p>mob : +91 6396937375 insta : anoopchaudhary1</p>
        </div>
      </div>

      <Header />
    </div>
  );
};

export default Contact;
