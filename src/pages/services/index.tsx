import React from "react";
import Nav from "../../components/nav";
import { additionalServices, services } from "../../lib/services";
import Footer from "../../components/footer";
import { Link } from "react-router";
// import { CheckCircle } from "lucide-react";

const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="p-2">
        <Nav />
      </div>
      <div className="flex space-y-25 flex-col lg:mt-20 justify-center p-4">
        <div className="max-w-5xl px-6 mx-auto w-full flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="text-6xl font-extrabold max-w-sm text-primary">
            <span
              style={{ fontFamily: "Inter" }}
              className="font-light text-gray-900 text-5xl"
            >
              Discover
            </span>{" "}
            Our Services
          </h2>
          <p className="max-w-sm text-lg outfit">
            Our operations span the full spectrum of marine and shipping
            logistics — from offshore support to chandling and vessel
            management.
            <br />
            <br />
            At Dolfs Shipping, we don’t just provide services; we deliver
            reliability, precision, and peace of mind at sea.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto w-full sm:max-lg:w-[70%] place-items-center">
          {services.map((item) => (
            <div className="flex flex-col gap-2 shadow-2xl p-2 rounded-xl bg-gray-100 transition hover:scale-105 duration-300 ease-in-out">
              <img
                src={item.img}
                alt={item.name}
                className="h-56 w-full rounded-xl object-cover object-center"
              />
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl w-full mx-auto p-4 my-25">
        <h3 className="text-4xl text-center font-bold">
          Additional Marine Solutions
        </h3>
        <div className="flex flex-col gap-4 items-center">
          {additionalServices.map((service) => {
            const Icon = service.icon;
            return (
              <div className="flex items-start gap-4 p-2 w-full">
                <div className={`h-20 w-24 rounded-xl ${service.bgColor} shadow-xl flex items-center justify-center`}>
                  <Icon className={`w-10 h-10 ${service.color}`}/>
                </div>
                <div className="flex flex-col gap-1 flex-2/3">
                  <h4 className="text-2xl font-medium">{service.name}</h4>
                  <p className="">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="p-2">
        <div className="max-w-lg mx-auto w-full p-6 flex flex-col items-center gap-6 bg-white/75 rounded-xl lg:bg-black shadow-2xl lg:text-white">
          <h2 className="text-4xl text-center font-semibold">
            Built on trust, Driven by Precision
          </h2>
          <ul className="space-y-4 font-extralight">
            <li className="flex items-center gap-2">
              <CheckCircle size={30} className="flex-1/6" />{" "}
              <p className="flex-5/6">20+ Years in Marine Operations.</p>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={30} className="flex-1/6" />
              <p className="flex-5/6">
                {" "}
                Partnership with Global Leaders (Total, Vespucci Marine, Elmar
                Shipping).
              </p>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={30} className="flex-1/6" />
              <p className="flex-5/6"> Certified Team & HSE Compliance.</p>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={30} className="flex-1/6" />
              <p className="flex-5/6">Swift Response, 24/7 Availability.</p>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="px-4 py-4 max-w-xl mx-auto text-center rounded-x outfit text-sm lg:text-lg bg-primary mt-10 text-white font-semibold">
        Every project we handle reflects our promise — dependable delivery,
        safety-first execution, and top-tier service across every tide
      </div>

      <div className="max-w-xs mx-auto gap-4 bg-linear-to-br from-gray-800 via-gray-950 to-black text-white rounded-xl p-4 my-15 flex flex-col items-center">
        <h5 className="text-lg font-medium text-center">
          Let’s Navigate the Future — Together.
        </h5>
        <hr className="w-[90%] border-white/20" />
        <Link
          to={"/contact-us"}
          className="outfit px-4 py-2 rounded-full text-white bg-primary"
        >
          Contact Our Team.
        </Link>
      </div>
      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
