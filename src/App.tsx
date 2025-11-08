import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage/>
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
