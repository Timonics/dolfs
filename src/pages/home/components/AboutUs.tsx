import React from "react";
import image from "../../../assets/dolfs-img.png";
import { Link } from "react-router";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
      <div className="border relative w-full min-h-[500px] flex items-center justify-center p-4 rounded-2xl bg-black overflow-hidden shadow-2xl shadow-black/70">
        <img
          src={image}
          alt=""
          className="absolute top-0 object-cover h-full w-full rounded-2xl z-0"
        />
        <div className="z-0 w-full h-full bg-black/60 absolute inset-0" />
        <div className="w-[550px] h-full absolute top-10 right-5 xl:right-10 bg-white/5 backdrop-blur-3xl rounded-t-xl text-white p-4 flex flex-col gap-4 max-lg:hidden">
          <h2 className="text-2xl px-4 py-1.5 rounded-full bg-black w-fit">
            About Us
          </h2>
          <p className="font-thin text-xl">
            <span className="text-2xl font-light outfit">
              Dolfs Shipping & Allied Nigeria Limited
            </span>{" "}
            is a wholly indigenous company with its staff operating in the
            maritime industry. With our headquarters in Lagos, Nigeria. We bring
            our wealth of experience and professionalism as ship chandler,
            supply of lube oil, supply of vessel spare parts,
            surveys/inspections of refined petroleum products, supply of fresh
            water to vessel, supply of fenders and barges, washing of cargo
            tanks, remover of garbage and sludge/slop from vessel and indepth
            consultancy to the maritime sector
          </p>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"about-us"}
            style={{ fontFamily: "Outfit" }}
            className="p-4 px-5 rounded-lg bg-primary w-fit hover:bg-[#0b1d51] transition duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
        <div className="lg:hidden z-10">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"about-us"}
            style={{ fontFamily: "Outfit" }}
            className="p-4 px-5 rounded-lg bg-primary w-fit text-white text-lg hover:bg-[#0b1d51] transition duration-300 ease-in-out"
          >
            Learn more about us
          </Link>
        </div>
        <h2 className="absolute bottom-6 left-6 z-10 text-white text-3xl lg:text-4xl max-w-md lg:max-xl:max-w-x">
          Redefining Marine Operations Across West Africa
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
