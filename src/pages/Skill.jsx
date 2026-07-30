import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";


const Skill = () => {

  const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
        },
        {
          name: "React JS",
          icon: <FaReact />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
      ],
    },


    {
      title: "Database",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
        {
          name: "SQL Server",
          icon: <FaDatabase />,
        },
      ],
    },


    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
        },
        {
          name: "VS Code",
          icon: <FaCode />,
        },
      ],
    },
  ];



  return (
    <div className="min-h-screen bg-slate-900 py-10">


      {/* Title */}
      <div className="text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold uppercase text-white">
          Skills
        </h1>

        <p className="text-gray-400 mt-3">
          My technical skills and technologies
        </p>

      </div>



      {/* Skill Cards */}
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


        {skills.map((category, index) => (

          <div
            key={index}
            className="
              bg-slate-800
              border
              border-blue-500
              rounded-2xl
              p-6
              shadow-lg
              hover:-translate-y-2
              duration-300
            "
          >


            <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
              {category.title}
            </h2>



            <div className="grid grid-cols-2 gap-4">


              {category.skills.map((skill, i) => (

                <div
                  key={i}
                  className="
                    bg-slate-900
                    rounded-xl
                    p-5
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    text-white
                    hover:bg-blue-600
                    transition
                  "
                >

                  <div className="text-4xl text-blue-400 cursor-pointer">
                    {skill.icon}
                  </div>


                  <p className="text-sm font-semibold text-center">
                    {skill.name}
                  </p>

                </div>

              ))}


            </div>


          </div>

        ))}


      </div>


    </div>
  );
};


export default Skill;