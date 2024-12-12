import React from "react";
import Circle from "../../assets/images/carat-right-circled.svg";
import Gradient1 from "../../assets/images/gradient-1.png";
import Gradient2 from "../../assets/images/gradient-2.png";
import HeroCard from "../../assets/images/hero-card.png";

const HeroSection = () => {
  return (
    <section className="hero-section mt-[55px] md:mt-[75px] relative min-h-[calc(100vh-144px)]">
      <div className="max-w-[1100px] mx-auto mb-5 px-5">
        <h1 className="animated-text text-2xl md:text-3xl lg:text-6xl font-medium text-center lg:leading-[80px]">
          Medical Software To Attract And{" "}
          <span className="font-semibold">Retain Patients</span>
        </h1>
        <p className="w-[80%] md:w-2/3 text-lg md:text-2xl text-center mx-auto mt-7 text-opacity-70 text-subdued">
          Patientgrid’s communication platform helps improve patient experience
          while reducing staff hours.
        </p>
        <button className="mt-7 hover:underline underline-offset-2 flex gap-1 items-center justify-center w-full group">
          <p className="font-medium">Start For Free</p>
          <img
            src={Circle}
            alt="Arrow"
            className="group-hover:translate-x-1 transition-all duration-300"
          />
        </button>
      </div>

      {/* Gradient section */}
      <div className="gradient-section flex justify-center h-[500px]">
        <img
          src={Gradient1}
          alt="gradient"
          className="absolute inset-0 w-full h-auto animate-fade-out"
        />
        <img
          src={Gradient2}
          alt="gradient"
          className="w-full h-auto animate-fade-in"
        />
        <div className="absolute z-10 w-full max-w-[80%] mx-auto mt-5 md:mt-10">
          <img src={HeroCard} alt="hero card" className="w-full mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
