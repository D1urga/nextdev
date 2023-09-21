import React from "react";
import Image from "next/image";
import Header from "../components/header";
import style from "./next.module.css";
import logo from "../images/next5.png";
import logo2 from "../images/next4.png";
import logo3 from "../images/next2.jpg";

const Nextjs = () => {
  return (
    <div className={style.outer_div}>
      <div style={{ height: "5rem" }}></div>
      <div className={style.head}>
        <h1 className={style.heading}>Build websites for any screen</h1>
      </div>
      <div className={style.first}>
        <div className={style.first1}>
          <Image src={logo} height={394} />
        </div>
        <div className={style.first2}>
          <h1>Next Js for Web Development</h1>
          <p>
            Next.js is a React framework for building full-stack web
            applications. You use React Components to build user interfaces, and
            Next.js for additional features and optimizations
          </p>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.second1}>
          <Image src={logo2} height={394} />
        </div>
        <div className={style.second2}>
          <h1>With improved routings</h1>
          <p>
            A file-system based router built on top of Server Components that
            supports layouts, nested routing, loading states, error handling,
            and more.
          </p>
        </div>
      </div>
      <div className={style.first}>
        <div className={style.first1}>
          <Image src={logo3} height={394} />
        </div>
        <div className={style.first2}>
          <h1>Easy to deploy</h1>
          <p>
            Vercel is a frontend cloud from the creators of Next.js, making it
            easy to get started with Next.js quickly. Jumpstart your Next.js
            development ...
          </p>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Nextjs;
