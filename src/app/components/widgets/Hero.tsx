import React from "react";
import Wrapper from "../shared/Wrapper";
import heroPoster from "../assets/heroPoster.png";
import Image from "next/image";
import Button from "../shared/Button";
const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left side */}
          <div className="flex-1">
            <h4 className="text-teal-800 font-semibold text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className={"text-6xl font-bold text-gray-900"}>
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet.
            </p>
            <p className="mt-2 text-xl text-slate-600">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-6 ">
              <Button text="Enroll Now" />
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image src={heroPoster} alt="a-picture" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
