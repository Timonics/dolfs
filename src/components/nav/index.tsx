import { Menu } from "lucide-react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import { nav } from "../../lib/nav";

const Nav: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <nav
      className={`flex w-full items-center justify-between z-10 ${
        pathName !== "/"
          ? "py-4 px-4 lg:px-10 shadow-2xl shadow-[#1c398e]/80 rounded-xl bg-[#1c398e]/90 text-white"
          : ""
      }`}
    >
      <Link to={"/"}>
        <h1 className="text-3xl font-bold">Dolfs</h1>
      </Link>
      <div className="lg:flex items-center gap-2 lg:gap-6 hidden">
        {nav.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? `scale-125 ${
                      pathName !== "/" ? "text-black" : "text-[#1c398e]"
                    } font-bold`
                  : "font-light"
              } transition-all hover:scale-125 duration-300 ease-in-out`
            }
            style={{ fontFamily: "Outfit" }}
            end
            to={item.link}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          to={""}
          className="bg-white text-black px-4 py-2 rounded-full text-lg"
          style={{ fontFamily: "Outfit" }}
        >
          {" "}
          Get Quote
        </Link>
        <Menu className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Nav;
