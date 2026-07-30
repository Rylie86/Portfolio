// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgClose } from "react-icons/cg";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <div className='grid bg-pink-100 grid-cols-[0.5fr_1fr] h-15 w-full sticky top-0 z-50'>
//         <div className=' flex justify-center items-center text-2xl'>
//           <span className='font-bold uppercase'>LongSokuntheary</span>
//         </div>
//         {/* <div className="bg-blue-500">
//         <ul className="flex gap-10 justify-end items-center">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/project">Project</Link></li>
//           <li><Link to="/Skill">Skill</Link></li>
//           <li><Link to="/contect">Contact</Link></li>
//           <li>Resume</li>
//         </ul>
//       </div> */}
//         <div className='w-full h-full flex items-center justify-end '>
//           <nav className=' hidden gap-10 lg:flex md:flex items-center font-bold uppercase mr-10'>
//             <NavLink
//               to='/'
//               className={({ isActive }) =>
//                 isActive ? "underline decoration-pink-500 underline-offset-4" : ""
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to='/skill'
//               className={({ isActive }) =>
//                 isActive ? "underline decoration-pink-500 underline-offset-4" : ""
//               }
//             >
//               Skill
//             </NavLink>

//             <NavLink
//               to='/project'
//               className={({ isActive }) =>
//                 isActive ? "underline decoration-pink-500 underline-offset-4" : ""
//               }
//             >
//               Project
//             </NavLink>

//             <NavLink
//               to='/contact'
//               className={({ isActive }) =>
//                 isActive ? "underline decoration-pink-500 underline-offset-4" : ""
//               }
//             >
//               Contact
//             </NavLink>

//             <NavLink to='/resume' className={({isActive})=> isActive ? "border bg-pink-300 px-3 py-1 rounded " : "px-3 border py-1 rounded bg-pink-200"}>
//               Resume
//             </NavLink>
//           </nav>
//           <button
//             className="lg:hidden md:hidden right-6 absolute text-3xl"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <CgClose /> : <GiHamburgerMenu />}
//           </button>
//           <div>
//             {open && (
//               <div className='absolute top-15 left-0 w-full bg-pink-100 flex flex-col items-center gap-5 py-5 font-bold uppercase lg:hidden md:hidden z-50'>
//                 <NavLink to='/' onClick={() => setOpen(false)} className={({isActive})=>isActive?"underline decoration-pink-500 underline-offset-4":""}>
//                   Home
//                 </NavLink>
//                 <NavLink to='/skill' onClick={() => setOpen(false)} className={({isActive})=>isActive ? "underline decoration-pink-500 underline-offset-4":" "}> 
//                   Skill
//                 </NavLink>
//                 <NavLink to='/project' onClick={() => setOpen(false)} className={({isActive})=>isActive ? "underline decoration-pink-500 underline-offset-4":""}>
//                   Project
//                 </NavLink>
//                 <NavLink to='/contact' onClick={() => setOpen(false)} className={({isActive}) => isActive ? "underline decoration-pink-500 underline-offset-4":""}>
//                   Contact
//                 </NavLink>
//                 <NavLink to='/resume' className={({isActive})=> isActive ? "border px-3 py-1 rounded bg-pink-400":"border px-3 py-1 rounded bg-pink-300"}>Resume</NavLink>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeStyle =
    "underline decoration-cyan-400 underline-offset-4";

  return (
    <>
      <div className="grid bg-slate-900 text-white grid-cols-[0.5fr_1fr] h-15 w-full sticky top-0 z-50 shadow-lg">

        {/* Logo */}
        <div className="flex justify-center items-center text-2xl">
          <span className="font-bold uppercase text-blue-600">
            LongSokuntheary
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="w-full h-full flex items-center justify-end">
          <nav className="hidden gap-10 lg:flex md:flex items-center font-bold uppercase mr-10">

            <NavLink
              to="/"
              className={({ isActive }) => isActive ? activeStyle : ""}
            >
              Home
            </NavLink>

            <NavLink
              to="/skill"
              className={({ isActive }) => isActive ? activeStyle : ""}
            >
              Skill
            </NavLink>

            <NavLink
              to="/project"
              className={({ isActive }) => isActive ? activeStyle : ""}
            >
              Project
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? activeStyle : ""}
            >
              Contact
            </NavLink>

            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "border bg-blue-500 text-slate-900 px-3 py-1 rounded"
                  : "border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-slate-900 transition"
              }
            >
              Resume
            </NavLink>

          </nav>


          {/* Mobile Button */}
          <button
            className="lg:hidden md:hidden right-6 absolute text-3xl text-blue-500"
            onClick={() => setOpen(!open)}
          >
            {open ? <CgClose /> : <GiHamburgerMenu />}
          </button>


          {/* Mobile Menu */}
          {open && (
            <div className="absolute top-15 left-0 w-full bg-slate-900 text-white flex flex-col items-center gap-5 py-5 font-bold uppercase lg:hidden md:hidden z-50 shadow-lg">

              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? activeStyle : ""}
              >
                Home
              </NavLink>

              <NavLink
                to="/skill"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? activeStyle : ""}
              >
                Skill
              </NavLink>

              <NavLink
                to="/project"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? activeStyle : ""}
              >
                Project
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? activeStyle : ""}
              >
                Contact
              </NavLink>

              <NavLink
                to="/resume"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border px-3 py-1 rounded bg-blue-500 text-slate-900"
                    : "border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-slate-900"
                }
              >
                Resume
              </NavLink>

            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Navbar;