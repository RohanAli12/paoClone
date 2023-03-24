"use client";
import Image from "next/image";
import '../shared/special.css'
import BoxDesign from "../shared/BoxDesign";
import Wrapper from "../shared/Wrapper";
import web3Img from "/public/assets/metaverse.webp";
import AiImage from "/public/assets/ai.webp";
import CloudImage from "/public/assets/cloud.webp";
import GeonomicsImage from "/public/assets/genomics.webp";
import NetworkImage from "/public/assets/network.webp";
import AmbientImage from "/public/assets/ambient.webp";
import { useState } from "react";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: web3Img,
    quaters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: "4",
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: "5",
      },
    ],
  },
  //second data
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: AiImage,
    quaters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: "4",
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: "5",
      },
    ],
  },
  //third data
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: CloudImage,
    quaters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: "4",
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: "5",
      },
    ],
  },
  //fourth data
  {
    slug: "ambient",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: AmbientImage,
    quaters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: "4",
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: "5",
      },
    ],
  },
  //fifth data
  {
    slug: "genomics",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: GeonomicsImage,
    quaters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: "4",
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: "5",
      },
    ],
  },
  //sixth data
  {
    slug: "network",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: NetworkImage,
    quaters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: "4",
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: "5",
      },
    ],
  },
];
const SpecialTrack = () => {
  const [selectedItems, setSelectedItems] = useState("wmd");
  const selectedItemData = programsData.find(
    (item) => item.slug === selectedItems
  );
  console.log(selectedItemData);
  return (
    <section>
      <Wrapper>
        {/* Header portion */}
        <div>
          <h2 className="font-bold text-2xl md:text-4xl  whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-2 max-w-screen-md md:mt-4 text-md md:text-xl text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        {/* portions */}
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-y-8 lg:gap-x-4  ">
          {/* left portion */}
          <div className=" basis-7/12 shadow-xl flex-1 self-start sticky top-24 border rounded-xl border-[#00616C] px-8 py-6">
            <h4 className="text-[#00616C] text-md md:font-medium md:text-base  ">
              Specialized Program
            </h4>
            <h2 className="font-semibold text-xl md:text-3xl whitespace-pre-line">
              {selectedItemData?.header}
            </h2>
            <p className="mt-2 md:mt-4 text-md md:text-xl text-slate-600">
              {selectedItemData?.description}
            </p>
            <div className="mt-4">
              <button className="text-[#00616C] text-xl font-semibold underline flex  gap-x-1">
                Learn More
                <svg
                  className="mt-3"
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                    stroke="#00616C"
                    stroke-width="2"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row gap-x-3 gap-y-2 ">
                {selectedItemData?.quaters.map((item, i) => (
                  <BoxDesign
                    key={i}
                    header={item.header}
                    description={item.description}
                    number={item.number}
                    haveBorder={false}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* right portion */}
          <div className=" space-y-4  basis-5/12 px-4 py-6  flex-1 ">
            {/* <SpecializedProgram imageSrc={"specialTrack.png"} altText={"Specialized Program"} title={"Specialized Program"} subtitle={"Web 3.0 (Blockchain) and Metaverse Specialization"}/>
              <SpecializedProgram imageSrc={"specialTrack2.png"} altText={"Specialized Program"} title={"Specialized Program"} subtitle={"Artificial Intelligence (AI) and Deep Learning Specialization"}/>
              <SpecializedProgram imageSrc={"specialTrack3.png"} altText={"Specialized Program"} title={"Specialized Program"} subtitle={"Web 3.0 (Blockchain) and Metaverse Specialization"}/>
              <SpecializedProgram imageSrc={"specialTrack4.png"} altText={"Specialized Program"} title={"Specialized Program"} subtitle={"Web 3.0 (Blockchain) and Metaverse Specialization"}/>
              <SpecializedProgram imageSrc={"specialTrack5.png"} altText={"Specialized Program"} title={"Specialized Program"} subtitle={"Web 3.0 (Blockchain) and Metaverse Specialization"}/>
              <SpecializedProgram imageSrc={"specialTrack6.png"} altText={"Specialized Program"} title={"Specialized Program"} subtitle={"Web 3.0 (Blockchain) and Metaverse Specialization"}/> */}
            {programsData.map((item, i) => (
              <div key={i}>
                
              <div
                onClick={() => setSelectedItems(item.slug)}                
                className="items-center gap-x-4 flex cursor-pointer">
                <div className="flex-shrink-0 h-28 w-5/12  my-shadow  ">

                
                  <Image
                    src={item.image}
                    alt={item.header}
                    className="h-28  object-cover rounded-md"
                  />                  
                </div>
                <div>
                  <h4 className="text-primary text-sm font-medium md:text-lg">
                    Specialized program
                  </h4>
                  <h3 className="md:text-xl text-sm font-semibold">
                    {item.header}
                  </h3>
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
              </div>
            ))}
          </div>
          {/* portion ends */}
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecialTrack;
