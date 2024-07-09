import React from "react";
import img from "../../src/assets/pg.webp";

const PNF = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <img src={img} className="mx-auto mb-8" alt="Page not found" />
        <p className="text-center text-xl text-gray-700">
          Sorry, page not found.
        </p>
      </div>
    </div>
  );
};

export default PNF;
