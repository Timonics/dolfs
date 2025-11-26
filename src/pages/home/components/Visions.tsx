import React from "react";
import { visions } from "../../../lib/vision";

const Visions: React.FC = () => {
  return (
    <div className="lg:from-sky-500 lg:to-[#1c398e] lg:bg-linear-to-br rounded-2xl lg:text-white pt-10 pb-5 lg:pb-10 lg:pt-20 px-6 lg:px-10 ">
      <div className="border-y-2 border-white/15 grid grid-cols-2 max-lg:hidden">
        <div className="grid grid-rows-3 min-h-[600px] border-r-2 border-white/15">
          <div className="row-span-1 border-b-2 border-white/15 flex flex-col justify-center gap-4">
            <h2 className="text-4xl">Our Compass for Excellence.</h2>
            <p className="text-md font-thin max-w-sm">
              Excellence isn't just our direction - it's the standard that
              defines us.
            </p>
          </div>
          <div className="row-span-2 flex flex-col justify-center gap-12">
            <h2 className="text-4xl lg:text-6xl">Mission</h2>
            <p className="text-md font-thin max-w-xl">
              Our mission is to be a key spotlight player in the maritime
              industry.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 min-h-[600px]">
          <div className="row-span-2 border-b-2 border-white/15 flex flex-col justify-center px-6 gap-12">
            <h2 className="text-4xl lg:text-6xl">Visions</h2>
            <p className="text-md font-thin max-w-xl">
              To ensure and sustain a top class index shipping company with
              vessels lifting cargo to the door step of mankind and the world at
              large with our marine services.
            </p>
          </div>
          <div className="row-span-1 flex flex-col justify-center px-6 gap-12">
            <h2 className="text-4xl lg:text-6xl">Core Values</h2>
            <p className="text-md font-thin max-w-xl">
              Integrity, Professionalism, Efficiency, Client Protection.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 lg:hidden">
        <h2 className="text-4xl text-center">Our Compass For Excellence</h2>
        <div className="flex flex-wrap gap-10 mt-10">
          {visions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="relative shadow-2xl rounded-xl max-w-sm mx-auto border-2 border-black/20 overflow-hidden"
              >
                <div className="absolute border w-[70%] h-[80%] bg-black/20 blur-3xl -z-10 bottom-0 right-0 translate-x-10 translate-y-10 rounded-full " />
                <div className="flex flex-col items-center gap-4 py-6 px-4 rounded-xl z-10 backdrop-blur-lg">
                  <div className="p-4 w-16 h-16 rounded-full shadow-2xl bg-white/20">
                    <Icon
                      className="w-8 h-8"
                      style={{
                        color: item.color,
                      }}
                    />
                  </div>
                  <h1 className="text-3xl font-semibold">{item.name}</h1>
                  <p className="text-center text-lg max-w-sm">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Visions;
