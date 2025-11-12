import React from "react";
import Nav from "../../components/nav";
import { Link } from "react-router";
import Footer from "../../components/footer";

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-25">
      <div className="p-2">
        <Nav />
      </div>
      <div className="flex space-y-25 flex-col lg:mt-20 justify-center">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-3xl lg:text-5xl lg:leading-15">
            Anchored in{" "}
            <span className="text-4xl lg:text-6xl font-semibold text-primary">
              Integrity,
            </span>
            <br />
            Powered by{" "}
            <span className="text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-900 ">
              Expertise.
            </span>
          </h1>
          <p className="max-w-xs md:max-w-sm lg:max-w-lg text-sm">
            With over two decades of trusted operations across West Africa’s
            maritime sector, Dolfs Shipping & Allied Nigeria Ltd stands as a
            pillar of reliability, precision, and professionalism in marine
            logistics and vessel services.
          </p>
        </div>

        <div className="py-10 px-4 rounded-2xl bg-black text-white space-y-20">
          <div className="flex flex-col lg:flex-row gap-4 items-center max-w-7xl mx-auto">
            <div className="w-full h-[400px] p-4">
              <div className="h-full bg-white/10 rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Who we are</h2>
              <p className="font-thin">
                Dolfs Shipping & Allied Nigeria Ltd is a wholly indigenous
                marine services company headquartered in Apapa, Lagos.
                <br />
                <br />
                For over 20 years, we’ve been at the forefront of marine
                logistics, ship chandling, lube oil supply, and offshore
                support, serving both local and international clients with
                unwavering commitment to quality.
                <br />
                <br />
                Our operations are built on trust, experience, and a deep
                understanding of maritime challenges — allowing us to deliver
                swift, dependable, and safe services that meet global standards.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-4 items-center max-w-7xl mx-auto">
            <div className="w-full h-[400px] p-4">
              <div className="h-full bg-white/10 rounded-xl shadow-2xl shadow-[#1c398e]/20" />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="font-thin">
                Established in 1997, Dolfs Shipping began with a simple goal: to
                deliver dependable marine services that rival international
                standards.
                <br />
                <br />
                From humble beginnings in Lagos to partnerships with leading
                global shipping companies — including Total Nigeria Plc and
                Vespucci Marine — our reputation has grown through consistency,
                expertise, and a deep respect for the sea.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center text-center">
          <h1 className="text-4xl lg:text-5xl lg:leading-15 max-w-md lg:max-w-lg">
            Our Commitment to Safety
          </h1>
          <p className="max-w-2xl">
            Safety isn’t a policy for us — it’s a culture. We strictly comply
            with international HSE regulations, maintain active staff training
            programs, and promote the mindset:
          </p>
          <div className="px-4 py-4 rounded-xl outfit text-sm lg:text-lg bg-primary text-white font-semibold">
            “Safety for Me! Safety for You!! Safety for All!!!”
          </div>
        </div>
        
        <div className="max-w-sm mx-auto gap-4 bg-linear-to-br from-gray-800 via-gray-950 to-black text-white rounded-xl p-4 flex flex-col items-center">
          <h5 className="text-lg font-medium">
            Let’s Navigate the Future — Together.
          </h5>
          <hr className="w-[90%] border-white/20" />
          <Link
            to={"./contact"}
            className="outfit px-4 py-2 rounded-full text-white bg-primary"
          >
            Contact Our Team.
          </Link>
        </div>
      </div>
      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
