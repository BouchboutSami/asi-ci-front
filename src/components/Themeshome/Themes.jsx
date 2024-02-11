import React from "react";
import Contactrfce from "./Contactrfce";
import Accordionthemes from "./Accordionthemes";

const Themes = () => {
  return (
    <div className="w-full flex flex-row justify-center gap-2 px-[2%]">
      <Accordionthemes />
      <Contactrfce />
    </div>
  );
};

export default Themes;
