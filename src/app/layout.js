"use client";
import Script from "next/script";
import { Inter } from "next/font/google";

import Header from "./layout/header-layout";
import Footer from "./layout/footer-layout";

import { ibm, ps2p } from "./fonts";

import "./layout/header-layout/header.scss";
import "@/scss/button.scss";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//     title: "BDAO",
//     description: "Generated by create next app",
// };
// export const metadata = {
//     title: "BDAO",
//     description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
                    type="module"
                />
                <link rel="icon" href="../../public/favicon.ico" />
                <style jsx global>{`
                    html {
                        font-family: ${ibm.style.fontFamily};
                    }

                    .fmb {
                        font-family: ${ps2p.style.fontFamily};
                    }
                `}</style>
                <title>BDAO</title>
            </head>

            <body className={inter.className}>
                <Header />

                <div className="main-bg">
                    <div className="bg-texture">
                        <section className="pt-[81px]"></section>
                        {children}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
