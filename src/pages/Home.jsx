import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import profileImage from "../assets/Profile.jpg";
import AboutImage from "../assets/Aboutme.jfif";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 w-full lg:h-screen md:h-[700px] min-h-screen flex pb-10'>
        <div className='w-[90%] h-full m-auto'>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 items-center h-full'>
            {/* Left */}
            <div className='text-left order-2 lg:order-1 text-white'>
              <h1 className='lg:text-6xl text-4xl font-bold font-serif leading-tight'>
                Frontend <br />
                <span className='text-blue-500'>Developer</span> Intern
              </h1>

              <p className='text-lg text-slate-300 mt-6 leading-8'>
                Motivated Frontend Developer with a strong foundation in HTML,
                CSS, JavaScript, React, and Tailwind CSS, eager to contribute,
                learn from experienced developers, and gain real-world
                experience through an internship.
              </p>

              <div className='mt-10 flex flex-col sm:flex-row gap-4'>
                <Link
                  to='/project'
                  className='bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-8 py-4 rounded-xl flex items-center gap-3'
                >
                  View Work
                  <FaArrowRight />
                </Link>

                <Link
                  to='/contact'
                  className='border border-blue-500 text-white hover:bg-blue-600 transition duration-300 px-8 py-4 rounded-xl'
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className='order-1 lg:order-2 flex justify-center'>
              <div className='relative'>
                <div className='overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl p-2'>
                  <img
                    className='w-[350px] h-[450px] object-cover rounded-xl'
                    src={profileImage}
                    alt='Profile'
                  />
                </div>

                <div className='absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-600 to-sky-500 p-4 rounded-b-xl text-center'>
                  <h2 className='text-2xl font-bold text-white'>
                    Long Sokuntheary
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='bg-slate-950 w-full py-20'>
        <div className='w-[90%] mx-auto'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold text-blue-500 mb-8'>About Me</h1>

            <p className='text-slate-300 text-lg leading-8 mb-10'>
              Hi, I'm{" "}
              <span className='text-white font-semibold'>Long Sokuntheary</span>
              , a second-year Information Technology student and an aspiring
              Frontend Developer. I enjoy building modern websites that combine
              beautiful designs with smooth user experiences.
            </p>

            <p className='text-slate-300 text-lg leading-8 mb-12'>
              I spend my time learning new technologies, creating personal
              projects, and improving my skills in{" "}
              <span className='text-blue-400 font-semibold'>
                React.js, JavaScript, Tailwind CSS, HTML, and CSS
              </span>
              . I believe every project is an opportunity to learn, improve, and
              create something meaningful.
            </p>

            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300'>
                <h2 className='text-blue-400 text-2xl font-bold mb-3'>
                  💻 Frontend
                </h2>
                <p className='text-slate-400'>
                  Creating responsive and interactive websites with modern
                  frontend technologies.
                </p>
              </div>

              <div className='bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300'>
                <h2 className='text-blue-400 text-2xl font-bold mb-3'>
                  🚀 Learning
                </h2>
                <p className='text-slate-400'>
                  Always improving my coding skills by building projects and
                  exploring new technologies.
                </p>
              </div>

              <div className='bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300'>
                <h2 className='text-blue-400 text-2xl font-bold mb-3'>
                  🎯 Goal
                </h2>
                <p className='text-slate-400'>
                  Becoming a professional developer and creating useful digital
                  experiences.
                </p>
              </div>
            </div>

            {/* Bottom Message */}
            <div className='mt-12 bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-500/30 rounded-2xl p-8'>
              <p className='text-slate-200 text-lg'>
                I am currently looking for a Frontend Developer internship where
                I can contribute to real projects, collaborate with developers,
                and continue growing my skills in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
