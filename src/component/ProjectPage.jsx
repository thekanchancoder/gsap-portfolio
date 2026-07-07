
"use client"
import { useRef } from "react";
import gsap, { ScrollTrigger } from "@/libs/gsap";
import TextReveal from "./TextReveal";
import { useGSAP } from "@gsap/react";
import useViewTransition from "@/hooks/useViewTransition";
const ProjectPage = ({ project,nextProject }) => {

const containerRef=useRef(null)
const imageRef=useRef(null)

useGSAP(()=>{

const sections=gsap.utils.toArray("section")

gsap.to(imageRef.current,{
  clipPath: 'inset(0 0 0% 0)',
  duration:1.4,
  ease:"expo.out",
  scale:1,
  delay:0.9
})



sections.forEach((section,idx)=>{
const container= section.children[0]

gsap.to(container,{
  rotate:0,
  ease:'none',
  scrollTrigger:{
    trigger:section,
    start:"top bottom",
    end:"top 20%",
    scrub:true,
  }
})

if(idx===sections.length-1)return

ScrollTrigger.create({
trigger:section,
start:'top bottom',
end:'bottom top',
pin:true,
pinSpacing:false,
})


})

},{scope:containerRef})


const {navigateTo}= useViewTransition()
const handleClick=()=>{
navigateTo(`/project/${nextProject.slug}`)

}

  return (
    <main className="bg-black text-red-700" ref={containerRef}>
      <section className="h-screen w-full   ">

      <div className="sectionContainer w-full h-full flex pt-[6rem] pb-[3rem] px-[3rem] ">

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
      </div>



      </section>


{project.gallery.map((elem,idx)=>{
return(
  <section key={idx} className="h-screen w-full  ">
<div style={
  {transformOrigin:"bottom left"}
} className="sectionContainer rotate-[36deg] h-full w-full">
<img className="h-full w-full object-cover" src={elem} alt="" />

</div>

  </section>
)
  



})}
      
    

      <footer className=" h-screen w-full flex items-center justify-center ">

<h1>next project</h1>
<h1 onClick={handleClick}>{nextProject.title}</h1>
      </footer>
    </main>
  );
};

export default ProjectPage;