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
        <ul className={isShowing ? laystyle.ul_list1 : laystyle.ul_list}>
          <li>
            <Link href="" className={laystyle.link}>
              flutter
            </Link>
          </li>
          <li>
            <Link href="" className={laystyle.link}>
              Next
            </Link>
          </li>
          <li>
            <Link href="" className={laystyle.link}>
              React
            </Link>
          </li>
          <li>
            <Link href="" className={laystyle.link}>
              NodeJS
            </Link>
          </li>
          <li>
            <Link href="" className={laystyle.link}>
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
