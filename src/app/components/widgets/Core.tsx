import BoxComponent from "../shared/BoxComponent";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const Core = () => {
  const para = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* content */}
        <div className="max-w-screen-sm">
          <h4 className="text-[#00616C] text-xs md:text-sm ">
            Program of Studies
          </h4>
          <h2 className="font-bold text2xl md:text-3xl whitespace-pre-line">
            {para}
          </h2>
          <p className="mt-2 md:mt-4 text-sm md:text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-4">
            <Button text={"Learn More"} />
          </div>
        </div>
        {/* boxes */}

        <div className="my-20 flex flex-col md:flex-row  gap-x-7 gap-y-6  ">
          {BoxComponent.map((item) => {
            return (
              <>
                <div className="border rounded-md relative flex flex-col justify-center flex-1 px-6 py-16">
                  <h4 className="font-bold text-lg ">{item.header}</h4>
                  <p className="text-slate-600 mt-2">
                    {item.description}
                  </p>
                  <span className="absolute -top-10 right-9 text-[170px] font-bold text-gray-200 -z-10">
                    {item.number}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Core;
