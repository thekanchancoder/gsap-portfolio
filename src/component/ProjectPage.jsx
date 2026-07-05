
"use client"
import { useRef } from "react";
import gsap from "@/libs/gsap";
import TextReveal from "./TextReveal";
import { useGSAP } from "@gsap/react";
const ProjectPage = ({ project }) => {

const containerRef=useRef(null)
const imageRef=useRef(null)

useGSAP(()=>{
gsap.to(imageRef.current,{
  clipPath: 'inset(0 0 0% 0)',
  duration:1.4,
  ease:"expo.out",
  scale:1,
  delay:0.9
})



},{scope:containerRef})

  return (
    <main className="bg-black text-red-700" ref={containerRef}>
      <section className="h-screen w-full pt-[6rem] pb-[3rem] px-[3rem]  flex">

        {/* Number */}
        <div className="firstSegment w-[15%] h-full">
          <TextReveal delay="0.8" >
            <h3 className="text-[2rem]">{project.number}</h3>
          </TextReveal>
        </div>

        {/* Image */}
        <div className="secondSegment  w-[30%] h-[90%]">
          <div 
          
          
          className="imageDiv overflow-hidden h-full w-full rounded-xl">
            <img
            ref={imageRef}
            style={{clipPath: 'inset(0 0 100% 0)'}}
              src={project.coverImage}
              alt={project.title}
              className="h-full scale-[1.3]  w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="thirdSegment w-[55%] h-[90%] pl-[4rem] flex flex-col justify-end">

          {/* Title */}
          <div className="heading mb-2">
            <TextReveal delay="0.8 " ease="power4.out" splitType="chars">
              <h1 className="text-[2.8rem] leading-[0.9] font-medium">
                {project.title}
              </h1>
            </TextReveal>
          </div>

          {/* Subtitle + Year */}
          <div className="flex items-center gap-5 mb-5">

            <TextReveal delay='0.8' splitType="words">
              <h2 className="text-[1.5rem]">
                {project.subtitle}
              </h2>
            </TextReveal>

            <TextReveal delay="0.8" splitType="chars">
              <span className="text-[1.3rem]">
                {project.year}
              </span>
            </TextReveal>

          </div>

          {/* Description */}
          <div className="description max-w-[520px] text-balance">
            <TextReveal delay="0.8" splitType="lines">
              <p className="text-[1rem] leading-[1.2]">
                {project.description}
              </p>
            </TextReveal>
          </div>

        </div>

      </section>

      <section className="h-screen w-full"></section>
      <section className="h-screen w-full"></section>
      <section className="h-screen w-full"></section>
      <section className="h-screen w-full"></section>

      <footer></footer>
    </main>
  );
};

export default ProjectPage;