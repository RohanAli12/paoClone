/* eslint-disable react/jsx-key */
import BoxDesign from "../shared/BoxDesign";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const Core = () => {
  const BoxComponent = [
     
    {
        id:1,
        header:"Quarter I",
        description:"CS-101: Object-Oriented Programming using TypeScript",
        number:"1",
    },
    {
        id:2,
        header:"Quarter II",
        description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number:"2",
    },
    {
        id:3,
        header:"Quarter III",
        description:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number:"3",
    }
 


]

  const para = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-28 relative">
      <Wrapper>
        {/* content */}
        {/* Animative blur circle */}
        <div className="absolute top-0 -left-7 mix-blend-multiply filter blur-3xl opacity-60 md:w-80 w-60 h-60 md:h-80 bg-[#05C19C]  rounded-full"></div>          
        <div className="max-w-screen-sm">
          <h4 className="text-[#00616C] text-md md:text-lg ">
            Program of Studies
          </h4>
          <h2 className="font-bold text-2xl md:text-4xl whitespace-pre-line">
            {para}
          </h2>
          <p className="mt-2 md:mt-4 text-md md:text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-4">
            <Button text={"Learn More"} />
          </div>
        </div>
        {/* boxes */}

        <div className="my-20 flex flex-col md:flex-row  gap-x-7 gap-y-6  ">
          {BoxComponent.map((item) => (
            <BoxDesign
            key={item.number}
              header={item.header}
              description={item.description}
              number={item.number}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Core;
