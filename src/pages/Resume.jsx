import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-10 flex flex-col items-center">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-white mb-10">
        Resume
      </h1>


      {/* Resume Card */}
      <div className="
        w-[90%]
        md:w-[60%]
        bg-slate-800
        border-2
        border-blue-400
        rounded-2xl
        p-8
        shadow-lg
        text-center
      ">


        <h2 className="text-3xl font-bold text-blue-400 mb-5">
          Long Sokuntheary
        </h2>


        <p className="text-gray-300 mb-8">
          Frontend Developer Student | React.js | Tailwind CSS
        </p>



        <div className="flex flex-col md:flex-row justify-center gap-5">


          {/* CV Download */}
          <a
            href="/LongSokuntheary_CV.pdf"
            download
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Download CV
          </a>



          {/* Cover Letter Download */}
          <a
            href="/LongSokuntheary_Cover_Letter.pdf"
            download
            className="
              bg-blue-100
              text-blue-900
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-blue-300
              transition
            "
          >
            Download Cover Letter
          </a>


        </div>


      </div>


      


    </div>
  );
};

export default Resume;