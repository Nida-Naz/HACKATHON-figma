"use client"
import Image from "next/image";
import PromotionalHeader from "./components/Promotional"
  import ProductCards from "./components/ProductCard";

export default function Home() {
  return (
  <div>
    
   
    <PromotionalHeader/>
    <div>
    <ProductCards/>
    
    </div>
    
  </div>

  );
}
