import React from "react";
import { Link } from "react-router";

const Contacts: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 border p-6 bg-linear-to-br from-gray-800 via-gray-950 to-black text-white rounded-xl">
      <h2 className="text-5xl">Connect With Us</h2>
      <div className="flex flex-col gap-4 items-center justify-center h-[200px]">
        <h3 className="text-xl font-extralight">
          Need reliable marine support? Our team is ready to assist.
        </h3>
        <div className="flex items-center gap-4">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"contact-us"}
            style={{ fontFamily: "Outfit" }}
            className="p-4 px-5 rounded-lg bg-primary w-fit text-white text-lg hover:bg-[#0b1d51] transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
