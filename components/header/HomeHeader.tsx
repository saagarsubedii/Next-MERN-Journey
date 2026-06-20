import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export default function HomeHeader () {
    return(
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

          <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <Link href="/categories" className="hover:text-orange-400 transition-colors">Categories</Link>
          <Link href="/shop" className="hover:text-orange-400 transition-colors">Shop Here</Link>
          <Link href="/cart" className="hover:text-orange-400 transition-colors">Cart</Link>
          
          {/* Highlighted Orange Buttons */}
          <div className="flex items-center gap-3 ml-4">
            <Link
              href="/signin" 
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-teal-950 font-medium transition-all" >
               Sign In
            </Link>
            {/* Solid Orange Register Button */}
            <Link 
              href="/register" 
              className="px-4 py-2 bg-orange-500 text-teal-950 rounded-md font-semibold hover:bg-orange-400 transition-all shadow-md"
            >
              Register
            </Link>
          </div>
        </nav>
 </header>
    )
}