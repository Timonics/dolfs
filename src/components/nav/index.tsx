import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { nav } from "../../lib/nav";

const Nav: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`flex w-full items-center justify-between z-20 ${
        pathName !== "/"
          ? "py-4 px-4 lg:px-10 shadow-2xl shadow-[#1c398e]/80 rounded-xl bg-[#1c398e]/90 text-white"
          : ""
      }`}
    >
      <Link to={"/"}>
        <h1 className="text-3xl font-bold">Dolfs</h1>
      </Link>
      <div className="lg:flex items-center gap-2 lg:gap-6 hidden">
        <>
          {nav.slice(0, -1).map((item) => (
            <NavLink
              key={item.name}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `text-2xl ${
                        pathName !== "/"
                          ? "bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-500"
                          : "bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-900"
                      } font-bold`
                    : "font-light hover:scale-125"
                } transition-all duration-300 ease-in-out`
              }
              style={{ fontFamily: "Outfit" }}
              end
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to={"/contact-us"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-black text-white" : "bg-white text-black"
              } px-4 py-2 rounded-full text-lg transition duration-300 hover:bg-black hover:text-white`
            }
            style={{ fontFamily: "Outfit" }}
          >
            {" "}
            Contact Us
          </NavLink>
        </>
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <Menu onClick={() => setNavIsOpen(true)} />
      </div>
      <div
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50 lg:hidden
          transition-all duration-300 ease-in-out z-50
          ${navIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        onClick={() => setNavIsOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 rounded--2xl  h-full w-64 bg-blue-100 lg:hidden transform transition-transform ease-in-out duration-300 p-2 flex flex-col gap-4 z-50  ${
          navIsOpen
            ? "translate-x-0 shadow-2xl shadow-blue-900"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold px-4 py-1.5 bg-black text-white rounded-md text-center">
            Dolfs
          </h1>
          <X
            className="text-black/75 mr-2"
            onClick={() => setNavIsOpen(false)}
          />
        </div>
        <div className="mt-5 flex flex-col items-start gap-4 outfit text-black ml-2">
          {nav.map((item) => (
            <NavLink
              key={item.name}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `text-2xl ${
                        pathName !== "/"
                          ? "bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-500"
                          : "bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-900"
                      } font-bold ml-2`
                    : "font-light hover:scale-125"
                } transition-all duration-300 ease-in-out`
              }
              style={{ fontFamily: "Outfit" }}
              end
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
