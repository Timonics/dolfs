import React from "react";
import Nav from "../../components/nav";
import { services } from "../../lib/vessel-support";
import Footer from "../../components/footer";
import { Link } from "react-router";

const VesselSupport: React.FC = () => {
  return (
    <div className="space-y-20">
      <div className="p-2">
        <Nav />
      </div>

      {/* <section className="w-full py-24 bg-[#0A1B2A] text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">
          Marine Agency & Operational Support Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Complete vessel assistance, crew handling, port documentation, and
          operational support handled with precision, compliance, and
          professionalism.
        </p>
      </section> */}

      <section className="flex space-y-25 flex-col lg:mt-20 justify-center">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-3xl md:text-5xl md:leading-15 max-w-2xl">
            Supporting Vessel Operations From Arrival to Departure
          </h1>
          <p className="max-w-xs md:max-w-sm lg:max-w-lg md:text-lg">
            Dolfs offers a wide range of marine agency and operational support
            services designed to help vessels operate smoothly, safely, and
            efficiently. From port clearance to crew handling and underwater
            cleaning, we ensure every aspect of your vessel’s stay is handled
            with care and compliance.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card Component */}
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-400 hover:shadow-md transition duration-200"
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5] text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">
          Let’s Support Your Vessel Operations
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          For agency coordination, repairs, documentation, or specialized vessel
          support, our team is ready to assist.
        </p>
        <Link
          to={"/contact-us"}
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
          className="px-5 py-4 outfit bg-primary text-white rounded-lg font-medium hover:bg-[#1c398e]/90 transition"
        >
          Contact Operations
        </Link>
      </section>

      <section className="p-2">
        <Footer />
      </section>
    </div>
  );
};

export default VesselSupport;

// export default function AgencyServicesPage() {
//   return (
//     <div className="w-full flex flex-col">
//       {/* Hero */}
//       <section className="w-full py-24 bg-[#0A1B2A] text-white text-center px-6">
//         <h1 className="text-4xl font-bold mb-4">
//           Marine Agency & Operational Support Services
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto opacity-90">
//           Complete vessel assistance, crew handling, port documentation, and
//           operational support handled with precision, compliance, and
//           professionalism.
//         </p>
//       </section>

//       {/* Intro */}
//       <section className="py-20 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-4">
//           Supporting Vessel Operations From Arrival to Departure
//         </h2>
//         <p className="text-slate-600 max-w-3xl mx-auto">
//           Dolfs provides a wide range of marine agency and operational services
//           designed to help vessels operate smoothly, safely, and efficiently.
//           From port clearance to crew handling and underwater cleaning, every
//           service is delivered with care and compliance.
//         </p>
//       </section>

//       {/* Services Grid */}
//       <section className="py-10 px-6 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {/* Service Card Component */}
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition duration-200"
//             >
//               <service.icon className="w-10 h-10 text-[#006B8F] mb-4" />
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-[#F5F5F5] text-center px-6">
//         <h3 className="text-3xl font-semibold mb-4">
//           Let’s Support Your Vessel Operations
//         </h3>
//         <p className="text-slate-600 max-w-2xl mx-auto mb-6">
//           For agency coordination, repairs, documentation, or specialized vessel
//           support, our team is ready to assist.
//         </p>
//         <button className="px-6 py-3 bg-[#006B8F] text-white rounded-lg font-medium hover:bg-[#055D77] transition">
//           Request a Quote
//         </button>
//       </section>

//       <Footer />
//     </div>
//   );
// }
