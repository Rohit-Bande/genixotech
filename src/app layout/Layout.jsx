import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RouteTracker from "../components/RouteTracker";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollRestoration />
      <main className="flex-grow">
        <RouteTracker />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
