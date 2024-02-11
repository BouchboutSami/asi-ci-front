/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="relative my-16 mx-4 flex flex-col items-center">
      <div className="w-full">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="text-center relative z-[9] flex flex-col md:gap-4 gap-2 mb-16 items-center justify-center">
            <div className="lg:text-3xl text-2xl font-medium leading-none tracking-wide">
              FORMATION CONTINUE
            </div>
            <div className="lg:text-3xl text-xl  font-medium tracking-wide">
              CHIFFRES
            </div>
          </div>
          <div className="lg:flex grid grid-cols-2  justify-center items-center  font-semibold z-[9] w-full gap-[5%] gap-y-14 lg:px-[5%]">
            <div className="z-[9] text-blue text-xl md:text-3xl lg:text-3xl xl:text-4xl text-center grow-0 shrink-0">
              <div>
                {counterOn && (
                  <CountUp start={0} end={60} duration={3} delay={0} />
                )}
                +
              </div>
              <div className="text-BLUE text-xl md:text-3xl xl:text-4xl tracking-wider">
                Entreprises
              </div>
            </div>
            <div className="z-[9] text-blue text-xl md:text-3xl lg:text-3xl xl:text-4xl text-center grow-0 shrink-0">
              <div>
                {counterOn && (
                  <CountUp start={0} end={4500} duration={3} delay={0} />
                )}
                +
              </div>
              <div className="text-blue text-xl md:text-3xl xl:text-4xl tracking-wider">
                Apprenants
              </div>
            </div>
            <div className="z-[9] text-blue text-xl md:text-3xl lg:text-3xl xl:text-4xl text-center grow-0 shrink-0">
              <div>
                {counterOn && (
                  <CountUp start={0} end={25} duration={3} delay={0} />
                )}
                +
              </div>
              <div className="text-BLUE text-xl md:text-3xl xl:text-4xl tracking-wider">
                Formateurs
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}
