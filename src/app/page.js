"use client";

import InfiniteCarouselCard from "@/component/InfiniteCarouselCard";
import TextReveal from "@/component/TextReveal";
import projects from "@/data/projects";
import { useRef } from "react";


export default function Home() {

  const triggerRef=useRef(null);
  return (
   <main className="h-screen w-full flex items-start bg-black ">
 <InfiniteCarouselCard projects={projects} />

   </main>
  );
}
