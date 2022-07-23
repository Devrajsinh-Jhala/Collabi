import React from "react";
import Navbar from "../components/Navbar";
import landing from "../assets/landing page illustraion-01 (1).png";
import building from "../assets/building.png";

const Test = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-10 mb-10">
        <div
          className="border-0 bg-no-repeat bg-cover bg-100 h-[92vh] lg:h-[89vh] xl:h-[72vh] "
          style={{
            backgroundImage: `url(${building})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Test;
