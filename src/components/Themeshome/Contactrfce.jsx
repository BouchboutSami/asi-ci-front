import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Contactrfce = () => {
  return (
    <div className="w-[35%] bg-darkblue flex flex-col p-[2%] text-white gap-10 h-max">
      <div className="Dahak flex flex-col gap-10">
        <h1 className="text-sm font-semibold leading-6">
          DIRECTEUR ADJOINT DES RELATIONS EXTÉRIEURES ET DE LA FORMATION
          CONTINUE
        </h1>
        <p>Contact</p>
        <p>M. Fouad DAHAK</p>
        <div className="flex flex-row items-center gap-4 ml-2">
          <MdMailOutline /> <p>f_dahak@esi.dz</p>
        </div>
        <div className="flex flex-row items-center gap-4 ml-2">
          <FaPhoneAlt /> <p>+213 23 93 91 31 Poste 3017</p>
        </div>
      </div>
      <div className="Djazia flex flex-col gap-10">
        <h1 className="text-sm font-semibold leading-6">
          Mme GUERROUMI Djazia
        </h1>
        <p>Chef de Service de la Formation Continue</p>
        <div className="flex flex-row items-center gap-4 ml-2">
          <FaPhoneAlt /> <p>023.93.91.31</p>
        </div>
        <div className="flex flex-row items-center gap-4 ml-2">
          <MdMailOutline /> <p>d_guerroumi@esi.dz</p>
        </div>
      </div>
    </div>
  );
};

export default Contactrfce;
