import { Link } from "react-router-dom";
const Border = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-5xl mx-auto bg-[#f5f3f5] rounded-sm border border-gray-300 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 uppercase">
          Looking for an internship opportunity?
        </h2>

        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
          I'm currently seeking a frontend developer internship where I can
          <br />
          improve my skills, learn from a team, and contribute to real projects.
        </p>

        <Link
        to="/contact"
          className="
            bg-blue-700
            hover:bg-blue-800
            transition duration-300
            text-white
            text-xl
            font-medium
            px-8
            py-2.5
            rounded-full
            shadow-sm
          "
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Border;