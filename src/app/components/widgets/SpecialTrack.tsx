import Wrapper from "../shared/Wrapper";

const SpecialTrack = () => {
  return (
    <section>
      <Wrapper>
        {/* Header portion */}
        <div>
          <h2 className="font-bold text2xl md:text-3xl whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-2 md:mt-4 text-sm md:text-xl text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        {/* left portion */}

        <div className="mt-10  max-w-screen-sm border rounded-3xl border-[#00616C] px-8 py-6">
          <h4 className="text-[#00616C] text-xs md:text-sm ">
            Specialized Program
          </h4>
          <h2 className="font-semibold text-sm md:text-3xl whitespace-pre-line">
            Web 3.0 (Blockchain) and Metaverse Specialization
          </h2>
          <p className="mt-2 md:mt-4 text-sm md:text-xl text-slate-600">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </p>
          <div className="mt-4">
            <button className="text-[#00616C]">Learn More</button>
          </div>
        </div>

        {/* left portion */}
      </Wrapper>
    </section>
  );
};

export default SpecialTrack;
