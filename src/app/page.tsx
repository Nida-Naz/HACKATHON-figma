"use client"
import Image from "next/image";
import PromotionalHeader from "./components/Promotional"
import ProductCards from "./components/ProductCard";
import Promotional2 from "./components/Promotional2";
import TrendingProdCards from "./components/TrendingProdCards";
import Promotional3 from "./components/Promotional3";
import TopCategories from "./components/TopCategories";
import LatestBlogs from "./components/LatestBlogs";

export default function Home() {
  return (
  <div>
   
    <PromotionalHeader/>
    <ProductCards/>
    
    <Promotional2/>
  
    <TrendingProdCards/>
    
    <Promotional3/>

    <TopCategories/>
    
    <LatestBlogs/>
  </div>


  );
}
