import React from "react";
import Nav from "../../components/nav";
import { Link } from "react-router";
import Footer from "../../components/footer";

import img1 from "../../assets/about/dolfs-img1.jpg";
import img2 from "../../assets/about/dolfs-img2.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-25">
      <div className="p-2">
        <Nav />
      </div>
      <div className="flex space-y-25 flex-col lg:mt-20 justify-center">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-3xl md:text-5xl md:leading-15">
            Anchored in{" "}
            <span className="text-4xl md:text-6xl font-semibold text-primary">
              Integrity,
            </span>
            <br />
            Powered by{" "}
            <span className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-900 ">
              Expertise.
            </span>
          </h1>
          <p className="max-w-xs md:max-w-sm lg:max-w-lg md:text-lg outfit">
            Dolfs is a marine logistics company focused on delivering
            consistent, dependable support to vessels across Lagos and beyond.
            Our team brings practical maritime experience and a commitment to
            doing things right — safely, efficiently, and with full
            transparency.
          </p>
        </div>

        <div className="py-10 px-4 rounded-2xl from-sky-500 to-[#1c398e] bg-linear-to-br text-white space-y-20 mx-2">
          <div className="flex flex-col lg:flex-row gap-4 items-center max-w-7xl mx-auto">
            <div className="w-full h-[400px] p-4">
              <img
                src={img1}
                alt=""
                className="h-full w-full shadow-2xl shadow-black/70 opacity-90 rounded-xl object-cover"
              />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-5xl font-bold">Who we are</h2>
              <p className="font-thin text-lg">
                Dolfs Shipping & Allied Nigeria Ltd is a dynamic marine
                services company based in Apapa, Lagos. We provide reliable ship
                chandling, lube oil supply, offshore support, and vessel
                assistance across Nigeria’s ports.
                <br />
                <br />
                Our team is built on professionals with real hands-on experience
                in the maritime industry. We combine practical knowledge with a
                fresh commitment to efficiency, transparency, and safe service
                delivery.
                <br />
                <br />
                At Dolfs, our focus is simple — deliver dependable marine
                support you can count on, every single time.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-4 items-center max-w-7xl mx-auto">
            <div className="w-full h-[400px] p-4">
              <img
                src={img2}
                alt=""
                className="h-full w-full shadow-2xl shadow-black/50 opacity-95 rounded-xl object-cover"
              />
            </div>
            <div className="w-full p-4 space-y-4">
              <h2 className="text-5xl font-bold">Our Story</h2>
              <p className="font-thin text-lg">
                Dolfs was founded with a clear purpose: to create a marine
                services company that operates with integrity, reliability, and
                modern efficiency. We saw the gaps in traditional service
                delivery, and set out to build a company that puts
                responsibility, responsiveness, and customer trust at the
                center.
                <br />
                <br />
                From our base in Lagos, we’re steadily expanding our reach and
                capabilities — building strong relationships, investing in
                quality resources, and ensuring every operation reflects our
                commitment to safe and dependable service.
                <br />
                <br />
                Our story is just beginning, but our ambition is clear: to grow
                into a respected, trustworthy partner for vessels operating
                across Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm mx-auto gap-4 bg-linear-to-br from-gray-800 via-gray-950 to-black text-white rounded-xl p-4 flex flex-col items-center">
          <h5 className="text-lg font-medium">
            Let’s Navigate the Future — Together.
          </h5>
          <hr className="w-[90%] border-white/20" />
          <Link
            to={"/contact-us"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
