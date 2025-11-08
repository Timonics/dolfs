import React from "react";
import { Link } from "react-router";

const Clients: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl mt-30 relative border flex flex-col mx-auto p-4 bg-black rounded-2xl shadow-2xl shadow-black/50 text-white min-h-[300px] lg:min-h-[200px] gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          Trusted By Leading Marine Partners
        </h2>
        <div className="max-lg:hidden rounded-b-2xl absolute right-0 w-[95%] -translate-x-6 translate-y-20 h-[300px] top-0 bg-[#1c398e]/40 backdrop-blur-3xl"></div>
        <div className="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 lg:hidden">
          <Link
            to={""}
            style={{ fontFamily: "Outfit" }}
            className="p-4 px-5 rounded-lg bg-primary w-fit text-white text-lg"
          >
            Our Clients
          </Link>
        </div>
      </div>
      <Link
        to={""}
        style={{ fontFamily: "Outfit" }}
        className="p-4 px-5 rounded-lg bg-primary w-fit text-white text-lg mx-auto mt-50 flex max-lg:hidden"
      >
        Our Clients
      </Link>
    </>
  );
};

export default Clients;
