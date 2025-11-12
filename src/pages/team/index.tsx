import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { Link } from "react-router";

const TeamPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="p-2">
        <Nav />
      </div>

      <div className="flex space-y-25 flex-col lg:mt-20 justify-center">
        <div className="flex space-y-25 flex-col lg:mt-20 justify-center p-4">
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="text-3xl lg:text-5xl lg:leading-15">
              Meet the Crew{" "}
              <span className="text-4xl lg:text-6xl font-semibold text-primary">
                Steering the course
              </span>
            </h1>
            <p className="max-w-xs md:max-w-sm lg:max-w-lg text-sm">
              Behind every successful voyage is a team of visionaries,
              engineers, and professionals who keep the mission on course —
              committed to excellence across every operation.
            </p>
          </div>
        </div>

        <div className="py-10 px-4 bg-black text-white space-y-20">
          <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
            <h2 className="text-6xl font-extrabold max-w-sm text-primary">
              <span
                style={{ fontFamily: "Inter" }}
                className="font-light text-gray-900 text-5xl"
              >
                Our
              </span>{" "}
              Leadership
            </h2>
            <p className="max-w-sm">
              The strength of Top Tales Shipping lies in the experience and
              integrity of its leadership — experts who have shaped Nigeria’s
              marine industry with over two decades of proven excellence.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center max-w-7xl mx-auto">
            <div className="w-[70%] lg:h-[500px] h-[250px] xl:rounded-full rounded-xl p-4">
              <div className="h-full bg-white/10 xl:rounded-full rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Abu David Babatope</h2>
              <h5 className="">Managing Director / CEO</h5>
              <p className="font-thin">
                A visionary entrepreneur and pioneer of Dolfs Shipping. With
                over 20 years of marine administration and logistics experience,
                he has built the company on a foundation of trust, discipline,
                and innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-4 items-center max-w-7xl mx-auto">
            <div className="w-[70%] lg:h-[500px] h-[250px] xl:rounded-full rounded-xl p-4">
              <div className="h-full bg-white/10 xl:rounded-full rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Mrs. Bukola Abu</h2>
              <h5>Executive Director</h5>
              <p className="font-thin">
                A key decision-maker and the operational backbone of Top Tales.
                Oversees logistics and procurement, ensuring efficiency and
                consistency across all supply operations.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center max-w-7xl mx-auto">
            <div className="w-[70%] lg:h-[500px] h-[250px] xl:rounded-full rounded-xl p-4">
              <div className="h-full bg-white/10 xl:rounded-full rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Abu I. Adeoye</h2>
              <h5 className="">General Manager</h5>
              <p className="font-thin">
                Certified marine surveyor and petroleum inspector with deep
                expertise in vessel operations and cargo inspections. Holds
                certifications from Lloyd’s Maritime Institute and Coastal
                Maritime Academy.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-4 items-center max-w-7xl mx-auto">
            <div className="w-[70%] lg:h-[500px] h-[250px] xl:rounded-full rounded-xl p-4">
              <div className="h-full bg-white/10 xl:rounded-full rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Tope Ogungbesan</h2>
              <h5>Operations and Logistics Manager</h5>
              <p className="font-thin">
                Coordinates complex marine operations with precision. Known for
                his ability to execute high-demand offshore logistics and
                maintain operational flow in challenging conditions.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center max-w-7xl mx-auto">
            <div className="w-[70%] lg:h-[500px] h-[250px] xl:rounded-full rounded-xl p-4">
              <div className="h-full bg-white/10 xl:rounded-full rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Mrs. Taiye Akinlusi</h2>
              <h5 className="">Chief Accountant</h5>
              <p className="font-thin">
                A chartered accountant whose professionalism ensures transparent
                and efficient financial operations within the company. Trusted
                for her integrity and precision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center text-center p-2">
        <h1 className="text-4xl lg:text-5xl lg:leading-15 max-w-md lg:max-w-lg">
          Integrity, Teamwork, and Commitment — Our Core at Sea and Ashore
        </h1>
        <p className="max-w-2xl text-start">
          At Dolfs Shipping, teamwork isn’t a buzzword — it’s our lifeline.
          Every team member is trained to uphold safety, discipline, and
          collaboration.
          <br />
          <br />
          Continuous training, respect for procedure, and open communication
          define our success both on deck and in the office.
        </p>
        <div className="px-4 py-4 rounded-xl outfit text-sm lg:text-lg bg-primary text-white font-semibold">
          “Our people are our strongest vessel — built for excellence, guided by purpose.”
        </div>
      </div>

      <div className="max-w-sm mx-auto my-20 gap-4 bg-linear-to-br from-gray-800 via-gray-950 to-black text-white rounded-xl p-4 flex flex-col items-center">
        <h5 className="text-lg font-medium text-center">
          Join the Crew. Shape the Future of Marine Logistics.
        </h5>
        <hr className="w-[90%] border-white/20" />
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            to={"./contact"}
            className="outfit px-4 py-2 rounded-full text-white bg-primary text-center"
          >
            View Careers
          </Link>
          <Link
            to={"./contact"}
            className="outfit px-4 py-2 rounded-full text-white bg-primary text-center"
          >
            Send Application
          </Link>
        </div>
      </div>

      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
};

export default TeamPage;
