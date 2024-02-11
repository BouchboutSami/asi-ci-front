/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-between font-montserrat pl-[5%]">
      <div className="left flex flex-col gap-10">
        <p className="text-blue font-bold">
          L’ESI vous souhaite la bienvenue sur
        </p>
        <h1 className="text-darkblue font-extrabold text-6xl">SIGREX WEB</h1>
        <p className="text-grey text-xl">
          Votre Portail vers des Programmes de Formation Expertement <br />
          Conçus par des Formateurs Compétents
        </p>
        <button className="bg-blue text-white flex w-fit px-6 py-3 justify-center items-center gap-4 rounded-md">
          <p className="font-montserrat font-medium">Voir nos formations</p>
          <FaLongArrowAltRight />
        </button>
      </div>
      <div className="right">
        <img src="/images/Hero.png" alt="Informatque" />
      </div>
    </div>
  );
};

export default HeroSection;
