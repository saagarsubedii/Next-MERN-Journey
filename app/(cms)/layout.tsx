import { ReactNode } from "react";
import {Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css"
import { CMSHeader } from "@/components/cms/CMSHeader";
import { SideBar } from "@/components/cms/SideBar";

const PoppinsSans = Poppins({
    variable: "--font-custom-sans",
    weight: ["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata ={
     title: "CMS Page || Dashboard",
     description: "This is admin or cms panel from whereyou will manage the content of the platform"
}

export default function  CMSLayout ({children}: Readonly<{childern: ReactNode}>){
    return(<>
    <html className={'${poppinsSans.variable}'}>
        <body>
            <CMSHeader/>
            <section className="w-full flex">
                <aside  className="w-100">
                   <SideBar/>
                </aside>
            </section>
           <section>
            {children}
           </section>
        </body>
    </html>
    </>
       
    )
}