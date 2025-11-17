import React from "react";
import { Link } from "react-router";

const Contacts: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 border p-6 bg-linear-to-br from-gray-800 via-gray-950 to-black text-white rounded-xl">
      <h2 className="text-5xl">Connect With Us</h2>
      {/* <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <div className="flex-1 flex flex-col gap-4 ml-4">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="font-thin text-lg">Phone Lines:</p>
          <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md ml-4">
            <h6>+234 802 312 7256</h6>
            <h6>+234 809 459 1393</h6>
          </div>
          <p className="font-thin text-lg">Emails:</p>
          <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md ml-4">
            <h6>info@toptalesshipping.com</h6>
            <h6>toptalesshipping@gmail.com</h6>
            <h6>toptalesshipping2004@yahoo.com</h6>
            <h6>toptales.operations@gmail.com</h6>
          </div>
          <p className="font-thin text-lg">Address:</p>
          <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md ml-4">
            <h6>
              20, Kofo Abayomi Avenue,
              <br />
              Apapa Lagos,
              <br />
              Nigeria.
            </h6>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 mt-4">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <p className="font-thin text-lg">Facebook:</p>
          <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md ml-4">
            <h6>Facebook.com/@YourPage</h6>
          </div>
          <p className="font-thin text-lg">Twitter: </p>
          <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md ml-4">
            <h6>Twitter.com/@YourHandle</h6>
          </div>
          <p className="font-thin text-lg">LinkedIn:</p>
          <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md ml-4">
            <h6>LinkedIn.com/in/YourProfile</h6>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col gap-4 items-center justify-center h-[200px]">
        <h3 className="text-xl font-extralight">
          Need reliable marine support? Our team is ready to assist.
        </h3>
        <div className="flex items-center gap-4">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"contact-us"}
            style={{ fontFamily: "Outfit" }}
            className="p-4 px-5 rounded-lg bg-primary w-fit text-white text-lg hover:bg-[#0b1d51] transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
          {/* <Link
            to={""}
            style={{ fontFamily: "Outfit" }}
            className="p-4 px-5 rounded-lg bg-primary w-fit text-white text-lg hover:bg-[#0b1d51] transition duration-300 ease-in-out"
          >
            Request Quote
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
