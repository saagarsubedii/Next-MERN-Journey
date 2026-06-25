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

export default function CMSLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <html className={PoppinsSans.variable}>
                <body>
                    <CMSHeader />
                    <div className="flex min-h-screen">
                        <aside className="w-80">
                            <SideBar />
                        </aside>
                        <main className="flex-1 bg-slate-50 p-4">
                            {children}
                        </main>
                    </div>
                </body>
            </html>
        </>
    )
}