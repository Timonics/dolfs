import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router";

const Footer: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div
      className={`${
        pathName !== "/contact-us"
          ? "bg-primary font-semibold rounded-xl"
          : "bg-black "
      } text-white w-full flex flex-col gap-6 p-4 py-6`}
    >
      {pathName !== "/contact-us" && (
        <>
          <div className="flex flex-col justify-between lg:flex-row gap-8 max-w-7xl mx-auto w-full">
            <div className={`flex flex-col gap-4`}>
              <h1 className="text-3xl bg-black px-4 py-1.5 font-bold rounded-lg w-fit h-fit">
                Dolfs.
              </h1>
              <p className="max-w-sm text-lg font-thin">
                Dolfs is your trusted partner in delivering top-notch solutions
                tailored to your business needs. We specialize in innovative
                strategies that drive success and foster growth.
              </p>
            </div>
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-30 mr-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Quick Links</h2>
                <ul className="flex flex-col gap-2 text-lg font-thin">
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={"/"}
                    className="transition duration-300 ease-in-out hover:scale-90 hover:font-light"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={"/about-us"}
                    className="transition duration-300 ease-in-out hover:scale-90 hover:font-light"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={"/our-services"}
                    className="transition duration-300 ease-in-out hover:scale-90 hover:font-light"
                  >
                    Services
                  </Link>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={"/contact-us"}
                    className="transition duration-300 ease-in-out hover:scale-90 hover:font-light"
                  >
                    Contact
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Follow Us</h2>
                <div className="flex gap-10">
                  <FaFacebook size={36} className="cursor-pointer transition duration-300 hover:scale-110"  />
                  <FaXTwitter size={36} className="cursor-pointer transition duration-300 hover:scale-110" />
                  <BsLinkedin size={36} className="cursor-pointer transition duration-300 hover:scale-110" />
                  <MdEmail size={36} className="cursor-pointer transition duration-300 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
          <hr className="border-white/10 border max-lg:mt-5 w-[95%] lg:w-[80%] mx-auto" />
        </>
      )}
      <h6
        className={`text-center text-lg ${
          pathName !== "/contact-us" && "font-thin"
        }`}
      >
        &copy; {new Date().getFullYear()} Dolfs. All rights reserved.
      </h6>
    </div>
  );
};

export default Footer;
