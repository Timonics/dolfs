import React from "react";
import { Link } from "react-router";

import ceoImg from "../../../assets/team/ceo-img.jpg"
import gMImg from "../../../assets/team/dara-img.jpg"

const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:gap-6 items-center">
      <h1 className="text-6xl flex-1/5 leading-14 max-xl:text-center">
        Meet Our <span className="text-primary font-medium">Team</span>
      </h1>
      <div className="flex-4/5 flex flex-wrap lg:flex-row items-center justify-center gap-10 p-4 rounded-xl min-h-[400px] mt-4">
        <div className="flex flex-col w-68 h-fit items-center p-4 rounded-xl lg:-translate-y-4 -rotate-6 shadow-2xl shadow-black/50 gap-2">
          <img src={ceoImg} alt="Mrs Bukola Abu" className="w-20 h-20 rounded-full bg-black object-center object-cover" />
          <h2 className="text-2xl mt-2 font-semibold text-center">
            Mrs. Abu Olajumoke Olubukola
          </h2>
          <p className="text-lg text-gray-600">Chief Executive Officer</p>
        </div>
        <div className="flex flex-col w-68 h-fit items-center p-4 rotate-2 rounded-xl lg:translate-y-10 shadow-2xl shadow-black/50 gap-2">
          <div className="w-20 h-20 rounded-full bg-black" />
          <h2 className="text-2xl mt-2 font-semibold text-center">Ms. Abu Nifemi</h2>
          <p className="text-lg text-gray-600">Executive Director</p>
        </div>
        <div className="flex flex-col w-68 h-fit items-center -rotate-3 p-4 rounded-xl  shadow-2xl shadow-black/50 gap-2">
          <img src={gMImg} alt="Oluwadarasimi Abu" className="w-20 h-20 rounded-full bg-black object-center object-cover" />
          <h2 className="text-2xl mt-2 font-semibold text-center">Mr. Abu Oluwadarasimi</h2>
          <p className="text-lg text-gray-600">General Manager</p>
        </div>
      </div>
      <Link
        to={"/our-team"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ fontFamily: "Outfit" }}
        className="p-4 shadow-2xl px-5 rounded-full bg-primary w-fit text-white text-lg mx-auto hover:bg-[#0b1d51] transition hover:scale-105 duration-300 ease-in-out"
      >
        View Our Team
      </Link>
    </div>
  );
};

export default Team;
