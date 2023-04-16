import React from "react";
import profile from "../assets/pexels-muhd-emir-3796217-removebg-preview.png";

export const Design = () => {
  return (
    <section className="text-center mt-20 w-1/2 m-auto p-3">
      <h3 className="font-semibold font-poppins">Design</h3>
      <h1 className="lg:text-6xl font-serif md:text-5xl sm:text-4xl text-3xl font-semibold mt-3">
        UX review presentations
      </h1>
      <p className="lg:text-lg md:text-base text-sm p-5 font-poppins">
        How do you create compelling presentations that wow your colleagues and
        impress your managers? Here's how to get started.
      </p>
      <div className="flex justify-center items-center">
        <img className="w-16 h-16 rounded-full" src={profile} alt="" />
        <ul>
          <li className="font-semibold font-poppins">Frankie Sullivan</li>
          <li className="font-poppins">13 Apr 2023</li>
        </ul>
      </div>
    </section>
  );
};
