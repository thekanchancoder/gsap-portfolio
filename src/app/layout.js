
import "./globals.css";
import SmoothScroller from "../component/SmoothScroller";

export const metadata = {
  title: "GSAP Portfolio",
  description: "A portfolio showcasing GSAP animations and projects",
};

export default function RootLayout({ children }) {
 
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
<SmoothScroller>
  {children}
</SmoothScroller>

      </body>
    </html>
  );
}
