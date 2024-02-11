"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Contactrfce from "./Contactrfce";
import Accordionthemes from "./Accordionthemes";

const Themes = () => {
  return (
    <div
      className="w-full flex flex-row justify-center gap-2 px-[2%]"
      id="formations"
    >
      <Accordionthemes />
      <Contactrfce />
    </div>
  );
};

export default Themes;
