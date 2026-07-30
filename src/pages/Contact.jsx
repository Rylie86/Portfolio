import React, { useRef } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { IoCall } from "react-icons/io5";
import { FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const sentEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g97fnzy", "template_g10d0oq", form.current, {
        publicKey: "P2aVtmgtdLJ_yKvm2",
      })
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send");
      });
  };

  return (
    <div className='w-full mx-auto bg-slate-900 py-10'>
      <h1 className='text-center font-bold text-white text-3xl md:text-4xl uppercase mb-10'>
        Contact
      </h1>

      <form ref={form} onSubmit={sentEmail}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left */}
          <div className='bg-slate-700 rounded-xl p-6'>
            <h1 className='text-center font-bold text-3xl md:text-5xl uppercase text-white'>
              Contact <span className='text-blue-400'>Me</span>
            </h1>

            <div className='w-full md:w-[85%] mx-auto bg-slate-950 rounded-lg p-6 md:p-8 mt-8 text-white'>
              {/* Phone */}
              <div className='flex items-center gap-5'>
                <a
                  href='tel:+85585586123'
                  className='flex justify-center items-center p-3 rounded-md bg-blue-100 text-black hover:bg-blue-400 transition'
                >
                  <IoCall className='text-2xl' />
                </a>

                <div>
                  <p className='text-sm text-gray-300'>Phone</p>
                  <p>085 586 123</p>
                </div>
              </div>

              {/* Telegram */}
              <div className='flex items-center gap-5 mt-6'>
                <a
                  href='https://t.me/Long_Sokuntheary'
                  target='_blank'
                  className='flex justify-center items-center p-3 rounded-md bg-blue-100 text-black hover:bg-blue-400 transition'
                >
                  <FaTelegramPlane className='text-2xl' />
                </a>

                <div>
                  <p className='text-sm text-gray-300'>Telegram</p>
                  <p>@Long_Sokuntheary</p>
                </div>
              </div>

              {/* Gmail */}
              <div className='flex items-center gap-5 mt-6'>
                <a
                  href='mailto:longsokuntheary20202021@gmail.com'
                  className='flex justify-center items-center p-3 rounded-md bg-blue-100 text-black hover:bg-blue-400 transition'
                >
                  <SiGmail className='text-2xl' />
                </a>

                <div>
                  <p className='text-sm text-gray-300'>Gmail</p>
                  <p className='break-all'>longsokuntheary20202021@gmail.com</p>
                </div>
              </div>

              {/* GitHub */}
              <div className='flex items-center gap-5 mt-6'>
                <a
                  href='https://github.com/Rylie86'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex justify-center items-center p-3 rounded-md bg-blue-100 text-black hover:bg-blue-400 transition'
                >
                  <FaGithub className='text-2xl' />
                </a>

                <div>
                  <p className='text-sm text-gray-300'>GitHub</p>
                  <p>@Rylie86</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className='flex items-center gap-5 mt-6'>
                <a
                  href='https://www.linkedin.com/in/long-sokuntheary-2a2a2b40b'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex justify-center items-center p-3 rounded-md bg-blue-100 text-black hover:bg-blue-400 transition'
                >
                  <FaLinkedinIn className='text-2xl' />
                </a>

                <div>
                  <p className='text-sm text-gray-300'>LinkedIn</p>
                  <p>Long Sokuntheary</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='bg-slate-700 rounded-xl p-4 md:p-6'>
            <div className='w-full rounded-2xl border-2 border-blue-400 shadow-lg p-5 md:p-8'>
              {/* Name + Email */}
              <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col gap-2 flex-1'>
                  <label className='font-semibold text-base md:text-xl text-white'>
                    Full Name *
                  </label>

                  <input
                    type='text'
                    name='name'
                    placeholder='Enter your full name...'
                    className='border py-3 px-4 rounded-md bg-white w-full'
                    required
                  />
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                  <label className='font-semibold text-base md:text-xl text-white'>
                    Email *
                  </label>

                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your email...'
                    className='border py-3 px-4 rounded-md bg-white w-full'
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className='flex flex-col gap-2 mt-5'>
                <label className='font-semibold text-base md:text-xl text-white'>
                  Subject
                </label>

                <input
                  type='text'
                  name='subject'
                  placeholder='Enter your subject...'
                  className='border rounded-md py-3 px-4 bg-white w-full'
                />
              </div>

              {/* Message */}
              <div className='flex flex-col gap-2 mt-5'>
                <label className='font-semibold text-base md:text-xl text-white'>
                  Your Message
                </label>

                <textarea
                  name='message'
                  placeholder='Enter your message...'
                  className='border rounded-md px-4 py-3 bg-white w-full h-40 resize-none'
                  required
                ></textarea>
              </div>

              {/* Button */}
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full sm:w-auto border border-blue-400 text-white rounded-xl py-3 px-8 flex items-center justify-center gap-3 cursor-pointer hover:bg-blue-400 hover:text-slate-900 transition'
                >
                  Send Message
                  <HiChevronDoubleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
