import React from "react";
import { Link } from "react-router";
import { services } from "../../../lib/services";

import shipChandlingImf from "../../../assets/services/ship-chandling.png";
import lubeOilsImg from "../../../assets/services/lube-oils.png";
import sparePartsImg from "../../../assets/services/spare-parts.png";
import fendersBargesImg from "../../../assets/services/fenders-barges.png";

const Services: React.FC = () => {
  return (
    <div
      className="
    max-w-4xl mx-auto flex flex-col gap-6 items-center"
    >
      <h1 className="text-4xl lg:text-6xl font-semibold">What We Do Best</h1>
      <div className="w-full p-4 grid grid-rows-2 gap-4 max-md:hidden">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-[180px] bg-black/10 rounded-xl relative overflow-hidden">
            <img
              src={shipChandlingImf}
              alt={"Ship Chandling Services"}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h4 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
              Ship Chandling Services
            </h4>
          </div>
          <div className="col-span-2 h-[180px] bg-black/10 rounded-xl relative overflow-hidden">
            <img
              src={lubeOilsImg}
              alt={"Supply of Lube Oils"}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h4 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
              Supply of Lube Oils
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 h-[180px] bg-black/10 rounded-xl relative overflow-hidden">
            <img
              src={sparePartsImg}
              alt={"Supply of Spare Parts"}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h4 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
              Supply of Spare Parts
            </h4>
          </div>
          <div className="col-span-3 h-[180px] bg-black/10 rounded-xl relative overflow-hidden">
            <img
              src={fendersBargesImg}
              alt={"Supply of Fenders and Barges"}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h4 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
              Supply of Fenders and Barges
            </h4>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col w-full gap-4">
        {services.map((item) => (
          <div
            className="h-[180px] bg-black/10 rounded-xl relative overflow-hidden"
            key={item.name}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h4 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
      <Link
        to={""}
        style={{ fontFamily: "Outfit" }}
        className="p-4 shadow-2xl px-5 rounded-full bg-primary w-fit text-white text-lg"
      >
        Explore Our Services
      </Link>
    </div>
  );
};

export default Services;
