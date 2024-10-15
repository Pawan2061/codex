"use client";

import Footer from "@/components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className=" overflow-hidden ">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}
