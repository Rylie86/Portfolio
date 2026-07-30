import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-6 
      flex flex-col md:flex-row 
      justify-between items-center">

        {/* Logo */}
        <h1 className="text-m font-semibold text-blue-900">
          DevPortfolio
        </h1>


        {/* Copyright */}
        <p className="text-m text-gray-500 mt-3 md:mt-0">
          © 2026 DevPortfolio. All rights reserved.
        </p>


        {/* Social */}
        <div className="flex gap-5 mt-3 md:mt-0">

          <a
             href="https://www.linkedin.com/in/long-sokuntheary-2a2a2b40b"
                  target="_blank"
            className="text-m text-gray-500 hover:text-blue-600 transition"
          >LinkedIn
           
          </a>

          <a
           href="https://github.com/Rylie86"
                  target="_blank"
            className="text-m text-gray-500 hover:text-blue-600 transition"
          > GitHub
            
          </a>
          <a
           href="https://t.me/Long_Sokuntheary" target="_blank"
            className="text-m text-gray-500 hover:text-blue-600 transition"
          >
           Telegram
          </a>


        </div>

      </div>

    </footer>
  );
};

export default Footer;