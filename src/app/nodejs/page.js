import React from "react";
import Image from "next/image";
import Header from "../components/header";
import style from "./nodejs.module.css";
import logo from "../images/node5.png";
import logo2 from "../images/node2.png";
import logo3 from "../images/node3.png";

const Nodejs = () => {
  return (
    <div className={style.outer_div}>
      <div style={{ height: "5rem" }}></div>
      <h1 className={style.heading}>Great tool for backend services</h1>
      <div className={style.first}>
        <div className={style.first1}>
          <Image src={logo} height={300} />
        </div>
        <div className={style.first2}>
          <h1>Power of javascript</h1>
          <p>
            Speed. JavaScript is an “interpreted” language, so it cuts down on
            the time needed for compilation in other languages like Java. ...
          </p>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.second1}>
          <Image src={logo2} height={200} />
        </div>
        <div className={style.second2}>
          <h1>Node js framework </h1>
          <p>
            Node. js is a popular programming environment that can be used for
            building high-scale applications that need to support multiple
            concurrent requests
          </p>
        </div>
      </div>
      <div className={style.first}>
        <div className={style.first1}>
          <Image src={logo3} height={200} />
        </div>
        <div className={style.first2}>
          <h1>Express Js for simplicity</h1>
          <p>
            Express is a node js web application framework that provides broad
            features for building web and mobile applications
          </p>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Nodejs;
