import React from "react";
import Image from "next/image";
import Header from "../components/header";
import style from "./flutter.module.css";
import logo from "../images/flutter2.png";
import logo2 from "../images/flutter6.png";
import logo3 from "../images/flutter5.png";

const Flutter = () => {
  return (
    <div className={style.outer_div}>
      <div style={{ height: "5rem" }}></div>
      <h1 className={style.heading}>Build apps for any screen</h1>
      <div className={style.first}>
        <div className={style.first1}>
          <Image src={logo} height={394} />
        </div>
        <div className={style.first2}>
          <h1>Flutter on Mobile</h1>
          <p>
            Bring your app idea to more users from day one by building with
            Flutter on iOS and Android simultaneously, without sacrificing
            features, quality, or performance.
          </p>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.second1}>
          <Image src={logo2} height={394} />
        </div>
        <div className={style.second2}>
          <h1>Flutter on iOS</h1>
          <p>
            With Flutter, you can create beautiful iOS apps featuring custom
            designs without sacrificing features, quality or performance.
          </p>
        </div>
      </div>
      <div className={style.first}>
        <div className={style.first1}>
          <Image src={logo3} height={394} />
        </div>
        <div className={style.first2}>
          <h1>Flutter on the Web</h1>
          <p>
            Easily reach more users in browsers with the same experience as on
            mobile devices through the power of Flutter on the web.
          </p>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Flutter;
