"use client";
import React from "react";
import { TiThMenu } from "react-icons/ti";
import laystyle from "../styles/navbar.module.css";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <div className={laystyle.outer_div}>
        <h1>NextDev</h1>
        <ul className={isShowing ? laystyle.ul_list : laystyle.ul_list1}>
          <li>
            <Link
              href="./flutter"
              className={laystyle.link}
              onClick={() => {
                setIsShowing(!isShowing);
              }}
            >
              flutter
            </Link>
          </li>
          <li>
            <Link
              href="./nextjs"
              className={laystyle.link}
              onClick={() => {
                setIsShowing(!isShowing);
              }}
            >
              Next
            </Link>
          </li>

          <li>
            <Link
              href="./nodejs"
              className={laystyle.link}
              onClick={() => {
                setIsShowing(!isShowing);
              }}
            >
              NodeJS
            </Link>
          </li>
          <li>
            <Link
              href="./contact"
              className={laystyle.link}
              onClick={() => {
                setIsShowing(!isShowing);
              }}
            >
              ContactUs
            </Link>
          </li>
        </ul>
        <div
          className={laystyle.menu}
          onClick={() => {
            setIsShowing(!isShowing);
          }}
        >
          <TiThMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
