"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row justify-between items-center py-4 px-8">
      <div className="logo flex flex-row items-center gap-6">
        <Image
          src="/images/ESI.png"
          alt="logo de l'ESI"
          width="50"
          height="50"
        />
        <h2 className="text-xl font-bold">SIGREX WEB</h2>
      </div>
      <div className="listDroite flex flex-row justify-between items-center w-2/5 text-grey font-semibold">
        <motion.div className="cursor-pointer hover:border-b-2 hover:border-blue">
          Formateurs
        </motion.div>
        <motion.div
          className="cursor-pointer hover:border-b-2 hover:border-blue"
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById("formations");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Formations
        </motion.div>
        <button className="bg-blue text-white font-semibold px-4 py-2 rounded-2xl cursor-pointer">
          Se connecter
        </button>
      </div>
    </div>
  );
}
