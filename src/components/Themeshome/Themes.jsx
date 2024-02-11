import React from "react";
import Accordionthemes from "./AccordionThemes";
import Contactrfce from "./Contactrfce";

const Themes = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-[10%]">
      <Accordionthemes />
      <Contactrfce />
    </div>
  );
};

export default Themes;
