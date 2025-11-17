import shipChandlingImf from "../assets/services/ship-chandling.png";
import lubeOilsImg from "../assets/services/lube-oils.png";
import sparePartsImg from "../assets/services/spare-parts.png";
import fendersBargesImg from "../assets/services/fenders-barges.png";
import { BrushCleaning, Droplets, Ship, Trash2, Utensils } from "lucide-react";

export const services = [
  {
    name: "Ship Chandling Services",
    img: shipChandlingImf,
    desc: "From provisions and bonded stores to safety equipment and deck supplies, we provide everything a ship needs while in port or offshore. Our chandling services are built around efficiency, quality, and compliance with international standards.",
  },
  {
    name: "Supply of Lube Oils",
    img: lubeOilsImg,
    desc: "We supply premium marine lubricants and oils that ensure vessel performance, protect machinery, and meet OEM standards. Our partnerships with trusted distributors guarantee quality and consistency every time.",
  },
  {
    name: "Supply of Spare Parts",
    img: sparePartsImg,
    desc: "From pumps and valves to electrical fittings and mechanical components, we source and deliver certified marine spare parts promptly — helping our clients minimize downtime and maintain operational efficiency.",
  },
  {
    name: "Supply of Fenders and Barges",
    img: fendersBargesImg,
    desc: "We provide heavy-duty fenders, barges, and docking equipment that ensure vessel protection during berthing. Every supply meets marine safety standards and is inspected for durability and reliability.",
  },
];

export const additionalServices = [
  {
    name: "Fresh Water Supply",
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    desc: "Potable and industrial-grade water delivered directly to your vessel — tested and approved for quality assurance.",
  },
  {
    name: "Garbage & Sludge Removal",
    icon: Trash2,
    color: "text-red-600",
    bgColor: "bg-red-100",
    desc: "Eco-compliant waste and sludge removal services ensuring environmental safety and full adherence to MARPOL standards.",
  },
  {
    name: "Washing of Cargo & Shore Tanks",
    icon: BrushCleaning,
    color: "text-green-600",
    bgColor: "bg-green-100",
    desc: "Professional cleaning and maintenance of cargo tanks, shore tanks, and storage systems — handled by trained personnel using standard marine cleaning protocols.",
  },
  {
    name: "Catering (Onshore & Offshore)",
    icon: Utensils,
    color: "text-sky-600",
    bgColor: "bg-sky-100",
    desc: "Full catering and supply solutions for offshore crews. Partnered with global brands to ensure consistent quality and prompt delivery.",
  },
  {
    name: "Marine Logistics & Consultancy",
    icon: Ship,
    color: "text-fuchsia-600",
    bgColor: "bg-fuchsia-100",
    desc: "Human and material transport between shore and offshore platforms, supported by modern logistics and seasoned coordination.",
  },
];
