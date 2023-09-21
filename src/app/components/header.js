import React from "react";
import style from "../styles/header.module.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <div className={style.outer_div}>
        <div className={style.inner_div}>
          <h3>NextDev</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className={style.inner_div}>
          <h3>Permalinks</h3>
          <p>flutter</p>
          <p>Next</p>
          <p>React</p>
          <p>Node js</p>
          <p>Contact us</p>
        </div>
        <div className={style.inner_div}>
          <h3>Primacy</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Refund Policy</p>
        </div>
        <div className={style.inner_div}>
          <h3>Contact us</h3>
          <p>+91 6396937375</p>
          <p>anoop chaudhary</p>
          <div className={style.icons}>
            <BiLogoFacebook className={style.logo} />
            <BiLogoInstagram className={style.logo} />
            <BiLogoTwitter className={style.logo} />
            <BiLogoLinkedin className={style.logo} />
          </div>
        </div>
      </div>
      <div className={style.space}></div>
      <div className={style.intro}>
        <p>This website is developed by anoop chaudhary</p>
      </div>
    </div>
  );
};

export default Header;
