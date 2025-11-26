import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="p-2">
        <Nav />
      </div>
      <div className="max-w-6xl mx-auto p-4 mt-15 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          We are here to assist
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto p-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
