
import "./globals.css";
import SmoothScroller from "../component/SmoothScroller";
import Navbar from "../component/Navbar";
import { Montserrat, Yuji_Syuku } from "next/font/google";

export const montenegrin = Montserrat({
  subsets: ["latin"],
  variable: "--font-montenegrin",
});

export const yuyu = Yuji_Syuku({
  subsets: ["latin"],
  variable: "--font-yuyu",
   weight: "400",
});


export const metadata = {
  title: "GSAP Portfolio",
  description: "A portfolio showcasing GSAP animations and projects",
};

export default function RootLayout({ children }) {
 
  return (
    <html
      lang="en"
      className={`   ${montenegrin.variable} ${yuyu.variable} h-full antialiased   `}
    >
      <body className="min-h-full flex flex-col">
 <Navbar/>
<SmoothScroller>
 
  {children}
</SmoothScroller>

      </body>
    </html>
  );
}
