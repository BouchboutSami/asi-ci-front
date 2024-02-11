import React from "react";
import { MdLaptopWindows } from "react-icons/md";

const Divider = () => {
  return (
    <div className="divider w-full flex justify-center items-center gap-20">
      <div className="w-1/4 h-[2px] bg-blue"></div>
      <MdLaptopWindows color="#1E73BE" />
      <div className="w-1/4 h-[2px] bg-blue"></div>
    </div>
  );
};

export default Divider;
