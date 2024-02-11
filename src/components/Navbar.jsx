"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row justify-between items-center py-4 px-8">
      <div className="logo">
        <Image
          src="/images/ESI.png"
          alt="logo de l'ESI"
          width="50"
          height="50"
        />
      </div>
      <div className="listDroite flex flex-row justify-between items-center w-1/3 text-grey font-semibold">
        <motion.div className="cursor-pointer">Formateurs</motion.div>
        <motion.div className="cursor-pointer">Formation</motion.div>
        <button className="bg-blue text-white font-semibold px-4 py-2 rounded-2xl cursor-pointer">
          Se connecter
        </button>
      </div>
    </div>
  );
}
