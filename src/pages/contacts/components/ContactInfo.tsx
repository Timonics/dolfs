import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="text-black">
        <div>
          <h2 className="text-2xl">Contact Information</h2>
          <p className="text-black/50">
            Here are the different ways you can reach us.
          </p>
        </div>
        <div className="space-y-6 mt-5 monte">
          {/* <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-900" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Emails</p>
              <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md">
                <h6>info@toptalesshipping.com</h6>
                <h6>toptalesshipping@gmail.com</h6>
                <h6>toptalesshipping2004@yahoo.com</h6>
                <h6>toptales.operations@gmail.com</h6>
              </div>
            </div>
          </div> */}

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-900" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Phone Lines</p>
              <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md">
                <h6>+234 815 951 6449</h6>
                <h6>+234 708 723 8593</h6>
                <h6>+234 808 938 5106</h6>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-900" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Location</p>
               <div className="bg-gray-300 flex flex-col gap-1 w-fit text-black px-4 py-2 rounded-md">
                <h6>
                  20, Kofo Abayomi Avenue,
                  <br />
                  Apapa Lagos,
                  <br />
                  Nigeria.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-blue-500/20">
        <div>
          <h2 className="text-2xl monte">Follow Us</h2>
          <p className="nun">
            Connect with us on social media and professional networks.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://facebook.com"
              className="border-blue-500 text-blue-800 hover:bg-blue-500 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer"
            >
              <FaFacebook className="w-5 h-5 mr-2" />
              Facebook
            </a>
            <a
              href="https://gmail.com"
              className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer"
            >
              <Mail className="w-5 h-5 mr-2" />
              Gmail
            </a>
            <a
              href="https://linkedin.com"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer"
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-700/10 to-blue-800/10 border-blue-700/30">
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-2 pops">
            Quick Response
          </h3>
          <p className="text-black/70 outfit">
            We typically respond to messages within 24 hours. For urgent matters,
            feel free to reach out via phone or connect with us on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
