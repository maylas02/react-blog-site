import React, { useState } from "react";
import { BsBoxFill } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <nav className="flex justify-between py-3 px-20 items-center font-poppins">
    //   <ul className="lg:flex lg:p-2 lg:w-1/2 lg:justify-between">
    //     <li className="flex items-center">
    //       <BsBoxFill className="mr-2" /> Untitled UI
    //     </li>
    //     <li>Home</li>
    //     <li className="flex items-center">
    //       Products <RxCaretDown className="ml-2" />
    //     </li>
    //     <li className="flex items-center">
    //       Resources <RxCaretDown className="ml-2" />
    //     </li>
    //     <li>Pricing</li>
    //   </ul>

    //   <ul className="flex items-center w-44 justify-between p-2">
    //     <li>
    //       <button>Log in</button>
    //     </li>
    //     <li>
    //       <button className="bg-black text-white px-3 py-2 rounded-lg">
    //         Sign up
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="lg:flex-row flex flex-col py-3 px-20 justify-between font-poppins sticky top-0 bg-gray-100 lg:relative">
      <h1 className="flex items-center py-3">
        <BsBoxFill className="mr-2" /> Untitled UI
      </h1>

      <div className="lg:flex w-4/5 justify-between items-center hidden">
        <ul className="flex md:flex-col lg:flex-row p-2 w-1/2 justify-between">
          <li>Home</li>
          <li className="flex items-center">
            Products <RxCaretDown className="ml-2" />
          </li>
          <li className="flex items-center">
            Resources <RxCaretDown className="ml-2" />
          </li>
          <li>Pricing</li>
        </ul>

        <ul className="flex items-center p-2 w-1/5 justify-between">
          <li>
            <button>Log in</button>
          </li>
          <li>
            <button className="bg-black text-white px-3 py-2 rounded-lg">
              Sign up
            </button>
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex fixed top-7 right-10">
        <RxHamburgerMenu className="cursor-pointer" onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div className="md:flex w-full lg:hidden">
          <ul className="flex flex-col justify-center m-auto items-center p-2 w-full left-0 right-0">
            <li className="w-full text-center py-2 px-3 my-1 hover:bg-gray-300 cursor-pointer">
              Home
            </li>
            <li className="w-full text-center py-2 px-3 my-1 hover:bg-gray-300 cursor-pointer">
              Products
            </li>
            <li className="w-full text-center py-2 px-3 my-1 hover:bg-gray-300 cursor-pointer">
              Resources
            </li>
            <li className="w-full text-center py-2 px-3 my-1 hover:bg-gray-300 cursor-pointer">
              Pricing
            </li>
            <li className="w-full text-center py-2 px-3 my-1 hover:bg-gray-300 cursor-pointer">
              <button>Log in</button>
            </li>
            <li>
              <button className="bg-slate-800 text-white px-3 py-2 rounded-lg hover:bg-black">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
