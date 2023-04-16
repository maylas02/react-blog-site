import React from "react";

export const Subscription = () => {
  return (
    <section className="text-center mb-10 bg-gray-100 w-3/4 m-auto py-10">
      <h1 className="lg:text-4xl text-2xl font-bold font-poppins">
        Still thinking about it?
      </h1>
      <h2 className="mt-3 font-poppins font-semibold">
        Sign up for our newsletter and get 10% off your next purchase.
      </h2>
      <input
        className="border border-gray-600 lg:w-1/4 w-auto px-3 py-2 mt-3 font-poppins placeholder:text-black"
        type="email"
        placeholder="Enter your email"
      />
      <button className="px-3 py-2 m-auto mt-3 lg:inline-block lg:ml-3 font-poppins block bg-slate-800 hover:bg-black text-white">
        Subscribe
      </button>
    </section>
  );
};
