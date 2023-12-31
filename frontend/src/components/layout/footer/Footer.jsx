import React from "react";
import { Link } from "react-router-dom";

import twitter from "../../../assets/svg/twitter.svg";
import fb from "../../../assets/svg/fb.svg";
import insta from "../../../assets/svg/insta.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import phone from "../../../assets/svg/phone.svg";
import rightArrow from "../../../assets/svg/right-arrow.svg";

import Button from "../../button/Button";
import Icon from "./icon/Icon";

const Footer = () => {
  const socials = [
    {
      to: "",
      icon: twitter,
    },
    {
      to: "",
      icon: fb,
    },
    {
      to: "",
      icon: insta,
    },
    {
      to: "",
      icon: linkedin,
    },
  ];

  return (
    <footer className="z-10">
      <div className="bg-secondary flex md:flex-row flex-col justify-between px-10 py-10 gap-20">
        {/* Newsletter */}
        <div className="flex flex-1 flex-col gap-10 justify-between text-white">
          <h4 className="text-xl font-semibold uppercase tracking-wide">
            SUBSCRIBE OUR EMAIL
          </h4>
          <div className="flex flex-col flex-1 gap-3 h-full">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-secondary-medium px-5 py-2 opacity-70 "
            />
            <Button variant="secondary">
              Submit Now
              <img src={rightArrow} />
            </Button>
          </div>
          <div className="flex gap-3 items-center ">
            <Icon icon={phone} to={""} />
            <Link>+1 (559) 380 9094</Link>
          </div>
        </div>

        {/* Questions */}
        <div className="flex flex-1 flex-col gap-10 justify-between text-white">
          <h4 className="uppercase tracking-wide ">Locum Tenens</h4>
          <div className="flex flex-col flex-1 opacity-70 gap-2 h-full">
            <Link>What is Locum Tenens?</Link>
            <Link>Why Work Locum Tenens?</Link>
            <Link>Work With Imperial Locum!</Link>
          </div>
          <div className="flex flex-col opacity-70 gap-3 underline">
            <Link to={"/"}>Privacy</Link>
            <Link to={"/"}>Terms & Conditions</Link>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-1 flex-col gap-10 justify-between text-white">
          <h4 className="uppercase tracking-wide ">About Imperial Locum</h4>
          <div className="flex flex-col flex-1 opacity-70 gap-2 h-full">
            <Link>Our Story</Link>
            <Link>Our People</Link>
          </div>
          <div className="flex opacity-70 gap-5 underline">
            {socials.map((item, index) => (
              <Icon key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-secondary-medium p-2">
        <Link className="text-white opacity-70">
          © 2023 Imperial Locum. All rights reserved.{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
