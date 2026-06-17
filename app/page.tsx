//by default ts/tsx every file is a server side component
// cannot use web hook
// sync
import { HeroBannerSection } from "@/components/Banner/HeroSection";
import {Metadata } from "next";

export const metadata: Metadata ={
  title: "Home Page || Ecommerce panel"
}


    export default function Home() {
  return (<>
<header className="bg-teal-50 text-black font-semibold p-5 w-full flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-1 w-auto object-contain"
          />
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex items-center gap-6 font-medium">
          {/* Links now glow orange on hover */}
          <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Categories</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Shop Here</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Cart</a>
          
          {/* Highlighted Orange Buttons */}
          <div className="flex items-center gap-3 ml-4">
            {/* Outlined Sign In Button */}
            <a 
              href="#" 
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-teal-950 font-medium transition-all"
            >
              Sign In
            </a>
            {/* Solid Orange Register Button */}
            <a 
              href="#" 
              className="px-4 py-2 bg-orange-500 text-teal-950 rounded-md font-semibold hover:bg-orange-400 transition-all shadow-md"
            >
              Register
            </a>
          </div>
        </nav>
 </header>
    <HeroBannerSection/>
       
    </>
  );
}
