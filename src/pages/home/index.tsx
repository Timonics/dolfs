import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Visions from "./components/Visions";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Contacts from "./components/Contacts";
import Footer from "../../components/footer";

const HomePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen mx-auto p-2 space-y-20 lg:space-y-30">
      <Hero />
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl lg:text-6xl font-light text-center">
          Anchored in <br className="md:hidden" />
          <span className="text-5xl lg:text-7xl font-semibold text-primary">
            Integrity,
          </span>
          <br />
        </h2>
        <h2 className="text-4xl lg:text-6xl font-light text-center">
          Powered by <br className="md:hidden" />
          <span className="text-5xl lg:text-7xl font-semibold bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-900 ">Expertise.</span>
          <br />
        </h2>
      </div>
      <AboutUs />
      <div className="mt-10 lg:mt-30">
        <Visions />
      </div>
      <Services />
      <hr className="border mx-auto border-black/20 max-w-7xl w-full" />
      <Clients />
      <hr className="border mx-auto border-black/20 max-w-7xl w-full" />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
};

export default HomePage;
