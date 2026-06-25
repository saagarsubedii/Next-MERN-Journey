import{ ReactNode} from "react";
import { Roboto, Roboto_Mono} from "next/font/google";
import "../globals.css";
import { Metadata } from "next";
import Home from "./page";
import HomeHeader from "@/components/header/HomeHeader";
import Footer from "@/components/footer/Footer";


//font ,image ,component
const RobotoSans = Roboto({
  variable: "--font-custom-sans",
  subsets: ['latin']
})
const RobotoMono = Roboto_Mono({
  variable: "--font-costom-sans",
  subsets: ['latin']
})

//server side component
export const metadata: Metadata = {
  title: "Ecommerce Home Page",
  description: "Ecommerce home is a place where you find all sort og goods and services."
}

export default function Rootlayout({children}: Readonly<{children: React.ReactNode}>){
 return(
  <html className={`${RobotoSans.variable} ${RobotoMono.variable} antialiased`}>
    <body>
      <HomeHeader/>
      {children}
      <Footer/>
    </body>
  </html>
 )
}

