import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import Themes from "@/components/Themeshome/Themes";

export default function Home() {
  return (
    <div className="w-screen h-min-screen flex flex-col gap-10">
      <Navbar />
      <HeroSection />
      <Divider />
      <Themes />
    </div>
  );
}
