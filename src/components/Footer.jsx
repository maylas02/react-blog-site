import React from "react";
import { BsBoxFill } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { CiBasketball } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className="flex justify-between m-auto font-poppins bg-gray-100 w-full p-10">
      <div className="w-1/2">
        <div>
          <h1 className="flex items-center font-semibold">
            <BsBoxFill className="mr-2" /> Untitled UI
          </h1>
        </div>
        <div className="w-3/4 mt-5">
          <p>
            Design amazing digital experiences that create money happy in the
            world.
          </p>
        </div>
        <ul className="lg:flex-row flex flex-col justify-between mt-5 font-semibold">
          <li className="py-1 lg:py-0">Overview</li>
          <li className="py-1 lg:py-0">Features</li>
          <li className="py-1 lg:py-0">Pricing</li>
          <li className="py-1 lg:py-0">Careers</li>
          <li className="py-1 lg:py-0">Help</li>
          <li className="py-1 lg:py-0">Privacy</li>
        </ul>
        <p className="mt-20 flex items-center lg:text-base text-sm">
          <CgCopyright className="" /> 2077 Untitled UI. All rights reserved.
        </p>
      </div>

      <div className="w-1/4">
        <div className="justify-end flex mr-7">
          <h1 className="font-semibold lg:text-base text-xs">Get the app</h1>
        </div>
        <div className="mt-3 flex justify-end">
          <button className="border border-black flex text-sm lg:text-base px-1 py-1 lg:px-3 lg:py-1 rounded-md items-center font-semibold bg-slate-800 hover:bg-black text-white">
            <FaApple className="mr-2" />
            App Store
          </button>
        </div>
        <div className="mt-3 flex justify-end">
          <button className="border border-black flex text-xs lg:text-base px-1 py-2 lg:px-3 lg:py-1 rounded-md items-center font-semibold bg-slate-800 hover:bg-black text-white">
            <FaGooglePlay className="mr-2" />
            Google Play
          </button>
        </div>
        <div className="flex justify-end">
          <ul className="lg:flex-row flex flex-col justify-around w-3/4 mt-24 text-xl p-2">
            <li className="py-1 lg:py-0">
              <AiOutlineTwitter className="cursor-pointer" />
            </li>
            <li className="py-1 lg:py-0">
              <AiFillLinkedin className="cursor-pointer" />
            </li>
            <li className="py-1 lg:py-0">
              <BsFacebook className="cursor-pointer" />
            </li>
            <li className="py-1 lg:py-0">
              <AiFillGithub className="cursor-pointer" />
            </li>
            <li className="py-1 lg:py-0">
              <CiBasketball className="cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
