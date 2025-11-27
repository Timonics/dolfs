import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about-us";
import ErrorPage from "./pages/error";
import ServicesPage from "./pages/services";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contacts";
import VesselSupport from "./pages/vessel-support";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutPage />,
  },
  {
    path: "our-services",
    element: <ServicesPage />,
  },
  {
    path: "marine-agency-services",
    element: <VesselSupport />,
  },
  {
    path: "our-team",
    element: <TeamPage />,
  },
  {
    path: "contact-us",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
