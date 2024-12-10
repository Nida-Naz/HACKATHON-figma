"use client"
import Image from "next/image";
import Headingbar from "./components/Headingbar";
import Navbar from "./components/Navbar";
import PromotionalHeader from "./components/Promotional";
import { Card } from "@/components/ui/card";
import CardDemo from "./components/Card";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <PromotionalHeader/>
    <div>
      <h4 className="w-367px h-42px my-1015px mx-777px text-[#1A0B5B;] text-center">Featured Products</h4>
      <div className="w-screen h-screen flex justify-center items-center">
    <CardDemo />
    </div>    
    </div>
    
  </div>

  );
}
