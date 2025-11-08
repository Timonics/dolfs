import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Nav: React.FC = () => {
  return (
    <nav className="flex w-full items-center justify-between z-10">
      <h1 className="text-3xl font-bold">Dolfs</h1>
      <div className="lg:flex items-center gap-2 hidden">
        {["Home", "About", "Services", "Clients", "Team", "Contact"].map(
          (item) => (
            <Link
              className="border px-5 py-2 rounded-full backdrop-blur-sm"
              style={{ fontFamily: "Outfit" }}
              to={item.toLowerCase()}
            >
              {item}
            </Link>
          )
        )}
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
