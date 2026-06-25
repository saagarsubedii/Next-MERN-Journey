//by default ts/tsx every file is a server side component
// cannot use web hook
// sync

import HeroBannerSection from "@/components/Banner/HeroSection";
import Footer from "@/components/footer/Footer";


import { Metadata } from "next";

export const metadata: Metadata ={
  title: "Home Page || Ecommerce panel"
}


    export default function Home() {
  return (<>
     <HeroBannerSection/>
   <section className="w-full bg-blue-600 text-white py-6 shadow-sm">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-semibold tracking-wide md:text-3xl">
      Featured Collection
    </h1>
  </div>
     
    </section>
    
       
    </>
  );
}
