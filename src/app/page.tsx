"use client"
import Image from "next/image";
import PromotionalHeader from "./components/Promotional";
import CardDemo from "./components/Card"
import ProductCard from "./components/Productcard";

export default function Home() {
  return (
  <div>
    
   
    <PromotionalHeader/>
    <div>
    <ProductCard/>
    
    </div>
    
  </div>

  );
}
