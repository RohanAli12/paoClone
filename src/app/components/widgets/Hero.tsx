import Image from "next/image";
import React from "react";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import herPoster from "/public/assets/hero-poster1.png";
const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center flex-col md:flex-row">
          {/* Left Section */}

          <div className="flex-1 ">
            <h4 className="text-[#00616C] text-xs md:text-sm ">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="font-bold text3xl md:text-4xl">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-2 md:mt-4 text-sm md:text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies.
            </p>
            <div className="mt-5">
              <Button text={"Learn More"} />
            </div>
          </div>

          {/* Right Section*/}
          <div className="flex-1">
            <Image src={herPoster} alt="Rohan Ali" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
