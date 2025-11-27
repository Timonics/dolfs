import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { Link } from "react-router";

import ceoImg from "../../assets/team/ceo-img.jpg";
import logImg from "../../assets/team/funmi-img.jpg";
import gMImg from "../../assets/team/dara-img.jpg";
import acctImg from "../../assets/team/ite-img.jpg";

const TeamPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="p-2">
        <Nav />
      </div>

      <div className="flex space-y-25 flex-col lg:mt-20 justify-center">
        <div className="flex space-y-25 flex-col lg:mt-10 justify-center p-4">
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="text-3xl lg:text-5xl lg:leading-15">
              Meet the Crew{" "}
              <span className="text-4xl lg:text-6xl font-semibold text-primary">
                Steering the course
              </span>
            </h1>
            <p className="max-w-xs md:max-w-sm lg:max-w-lg text-lg">
              Behind every successful voyage is a team of visionaries,
              engineers, and professionals who keep the mission on course —
              committed to excellence across every operation.
            </p>
          </div>
        </div>

        <div className="py-10 px-4 bg-black text-white space-y-25">
          <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
            <h2 className="text-6xl font-extrabold max-w-sm text-primary">
              <span
                style={{ fontFamily: "Inter" }}
                className="font-light text-white/30 text-5xl"
              >
                Our
              </span>{" "}
              Leadership
            </h2>
            <p className="max-w-sm text-lg outfit">
              The strength of Dolfs Shipping lies in the experience and
              integrity of its leadership — a team of professionals with real
              hands-on knowledge of Nigeria’s marine industry.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-7xl mx-auto">
            <img
              src={ceoImg}
              className=" object-cover lg:h-[400px] h-[250px] bg-white/10 rounded-xl shadow-xl shadow-[#1c398e]/50"
            />
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">
                Mrs. Abu Olajumoke Olubukola
              </h2>
              <h5 className="">Managing Director / CEO</h5>
              <p className="font-thin">
                Mrs. Bukola Olajumoke Abu is an energetic enterpreneur who has
                traversed different paths in her paths so far. She's been the
                pioneer at the business and season shipping administrator as a
                professional. With over 20 years hands-on experience.
                <br />
                <br />
                Mrs. Bukola Olajumoke Abu is a trail blazer with strong passion
                for his work and a member of IMC which has earned her a position
                as board member in many blue chip comanies. She is the Managing
                Director/Chief Executive Officer (CEO) of Dolfs Shipping.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-4 items-center max-w-7xl mx-auto">
            <div className="w-[70%] lg:h-[500px] h-[250px] xl:rounded-full rounded-xl p-4">
              <div className="h-full bg-white/10 xl:rounded-full rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Ms. Nifemi Abu</h2>
              <h5>Executive Director</h5>
              <p className="font-thin">
                Ms. Nifemi Abu plays a vital role at Dolfs shipping as an
                executive director in decisions making which is one of the
                strength and power house of sustaining the business. She plays
                major roles in purchasing and logistics of the company.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-7xl mx-auto">
            <img
              src={gMImg}
              className=" object-cover lg:h-[400px] h-[250px] bg-white/10 rounded-xl shadow-xl shadow-[#1c398e]/50"
            />
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Mr Oluwadarasimi Abu</h2>
              <h5 className="">General Manager</h5>
              <p className="font-thin">
                Oluwadarasimi Abu is a professional with vast experience in the
                maritime industry and has grown as a major player in the
                surveyor/petroleum inspector sector and was priviledge to know
                reliable buyers and sellers of refined products such as PMS, DPK
                and AGO as their principal agents
                <br />
                <br />
                Oluwadarasimi Abu is dedicated in his area of specialization
                with credible performance His ability, tenacity and prudent
                disposition has been essential to ensuring a smooth and
                efficient management system at Dolfs Shipping.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col lg:flex-row-reverse gap-4 items-center max-w-7xl mx-auto">
            <div className="w-[70%] lg:h-[500px] h-[250px] xl:rounded-full rounded-xl p-4">
              <div className="h-full bg-white/10 xl:rounded-full rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Mr Cyril Enoumoh</h2>
              <h5>Operations Manager</h5>
              <p className="font-thin">
                Cyril Enoumoh is our operations manager with much experience in
                the maritime industry and has accomplished several difficult
                operation task that has earn him much credit to take the role as
                the operations manager at Dolfs Shipping.
              </p>
            </div>
          </div> */}
          <div className="flex flex-col md:flex-row-reverse gap-4 items-center max-w-7xl mx-auto">
            <img
              src={logImg}
              className="object-cover lg:h-[400px] h-[250px] bg-white/10 rounded-xl shadow-xl shadow-[#1c398e]/50"
            />
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Mr Funmi Odunsanya</h2>
              <h5>Logistics Manager</h5>
              <p className="font-thin">
                Funmi Odunsanya is our of logistics, his effectiveness and
                reliabiility has proven his efficiency in the logistics
                department and has earn him the position as Dolfs Shipping
                logistics manager.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center max-w-7xl mx-auto">
            <img
              src={acctImg}
              className="object-cover lg:h-[400px] h-[250px] bg-white/10 rounded-xl shadow-xl shadow-[#1c398e]/50"
            />
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">
                Ms. Iteoluwakiishi Oderinde
              </h2>
              <h5 className="">Chief Accountant</h5>
              <p className="font-thin">
                An accountant whose professionalism ensures transparent and
                efficient financial operations within the company. Trusted for
                her integrity and precision.
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
          “Our people are our strongest vessel — built for excellence, guided by
          purpose.”
        </div>
      </div>

      <div className="p-2">
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
      </div>

      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
};

export default TeamPage;
