import React from "react";
import Nav from "../../../components/nav";
import heroImg from "../../../assets/dolfs-hero.jpg";
import { Link } from "react-router";

const Hero: React.FC = () => {
  return (
    <div className="border p-4 rounded-xl flex flex-col gap-6 bg-black text-white/90 relative overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full z-0 object-cover object-center"
        src={heroImg}
        alt="Hero Image"
      />
      <div className="bg-black/15 absolute inset-0 z-0" />
      <Nav />
      <div className="z-10 lg:ml-10 mb-5 lg:mb-15">
        <div className="mt-15 max-w-4xl flex flex-col gap-4">
          <h1 className="text-[40px] md:text-6xl lg:text-7xl max-md:leading-10 ">
            Reliable{" "}
            <span className="text-[#1c398e]">Marine & Shipping Services</span>{" "}
            Across West Africa
          </h1>
          <p className="text-lg lg:text-2xl font-extralight max-w-2xl">
            Dolfs provides complete chandling, supply, and vessel support across Nigeria’s ports — delivering reliability, safety, and speed in every operation.
          </p>
        </div>
        <div className="mt-10 lg:mt-40 space-y-4">
          <p className="text-lg lg:text-2xl font-light">
            Trusted by global and local partners for over 20 years.
          </p>
          <div className="flex items-center gap-4 text-lg">
            <Link
              to={"/our-services"}
              style={{ fontFamily: "Outfit" }}
              className="bg-[#1c398e] text-white px-5 py-2 rounded-full transition hover:scale-110 duration-300 ease-in-out"
            >
              Our Services
            </Link>
            <Link to={""} style={{ fontFamily: "Outfit" }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
