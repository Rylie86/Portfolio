import React from "react";
import { project } from "../Data/Project.js";
import Border from "./Border";
const Project = () => {
  return (
    <div className='bg-slate-800 w-full min-h-screen'>
      {/* Title */}
      <div className='w-full text-center py-10 bg-slate-900'>
        <h1 className='text-4xl font-bold uppercase text-white'>Projects</h1>
      </div>

      
      <div className='w-[90%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {project.map((item) => (
          <div
            key={item.id}
            className='
              bg-white 
              rounded-xl 
              overflow-hidden 
              shadow-lg 
              
             
              flex 
              flex-col
              border-2 
              border-slate-300
              
            '
          >
          
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-48 object-cover'
            />

        
            <div className='p-5 flex flex-col flex-1'>
              <h2 className='text-xl font-bold text-blue-900'>{item.title}</h2>

              <p className='text-gray-600 mt-2 line-clamp-5 h-30'>{item.description}</p>
               <div className='flex flex-wrap gap-2 mt-3 '>
                {item.tech.map((skill, index) => (
                  <span
                    key={index}
                    className='
                      bg-blue-100 
                      text-blue-900 
                      px-3 
                      py-1 
                      rounded-full 
                      text-sm
                    '
                  >
                    {skill}
                  </span>
                ))}
              </div> 
              <div className='flex gap-3 mt-auto pt-5'>
                <a
                  href={item.github}
                  target='_blank'
                  className='
                    bg-blue-900 
                    text-white 
                    px-4 
                    py-2 
                    rounded-lg
                    hover:bg-blue-700
                    transition
                  '
                >
                  GitHub
                </a>

                <a
                  href={item.live}
                  target='_blank'
                  className='
                    bg-blue-400 
                    text-slate-900 
                    px-4 
                    py-2 
                    rounded-lg
                    hover:bg-blue-500
                    transition
                  '
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Border />
    </div>
  );
};

export default Project;
