import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import Themes from "@/components/Themeshome/Themes";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="w-[100% - 4px] h-min-screen flex flex-col gap-10">
      <Navbar />
      <HeroSection />
      <Counter />
      <Divider />
      <Themes />
      <Partners />
      <Footer />
    </div>
  );
}
