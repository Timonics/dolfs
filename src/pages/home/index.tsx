import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Visions from "./components/Visions";
import Services from "./components/Services";
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
          <span className="text-5xl lg:text-7xl font-semibold bg-clip-text text-transparent bg-linear-to-br from-sky-400 to-blue-900 ">
            Expertise.
          </span>
          <br />
        </h2>
      </div>
      <AboutUs />
      <div className="mt-10 lg:mt-30">
        <Visions />
      </div>
      <Services />
      <hr className="border mx-auto border-black/20 max-w-7xl w-full" />
      {/* <Clients /> */}
      <div className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl lg:text-5xl lg:leading-15 max-w-md lg:max-w-lg">
          Our Commitment to Safety
        </h1>
        <p className="max-w-2xl lg:text-xl">
          Safety isn’t a policy for us — it’s a culture. We strictly comply with
          international HSE regulations, maintain active staff training
          programs, and promote the mindset:
        </p>
        <div className="px-4 py-4 outfit text-sm lg:text-lg bg-primary text-white font-semibold">
          “Safety for Me! Safety for You!! Safety for All!!!”
        </div>
      </div>
      <hr className="border mx-auto border-black/20 max-w-7xl w-full" />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
};

export default HomePage;
