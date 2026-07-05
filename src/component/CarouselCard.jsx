import TextReveal from "./TextReveal";
import { useRef } from "react";
import gsap from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import useViewTransition from "@/hooks/useViewTransition";

const card_w = 250;
const card_h = 300;
const scale = 1.2;

const CarouselCard = ({ project, onHoverStart, onHoverEnd }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.set(cardRef.current, {
      width: card_w,
      height: card_h,
    });
  });

  const onEnter = () => {
    onHoverStart?.();

    gsap.to(cardRef.current, {
      width: card_w * scale,
      height: card_h * scale,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power3.out",
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: card_w,
      height: card_h,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };
  const navigateTo = useViewTransition()
const handleClick = () => {
navigateTo(`/project/${project.slug}`)

}

  return (
    <div
      ref={cardRef}
onClick={handleClick}

      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: card_w,
        height: card_h,
        flexShrink: 0,
        overflow: "hidden",
        cursor: "pointer",
      }}
      className="relative rounded-xl overflow-hidden"
    >
      {/* Title Panel */}
      <div
        style={{ bottom: "calc(100% + 1.3rem)" }}
        className="absolute left-0 pointer-events-none flex flex-col gap-[0.8rem]"
      >
        <TextReveal ref={numberRef}  duration={0.25} trigger="manual" splitType="chars">
          <h3 className="text-[1rem] text-white">{project.number}</h3>
        </TextReveal>

        <TextReveal ref={titleRef} duration={0.25} trigger="manual" splitType="words">
          <h3 className="text-[1rem] text-white">{project.title}</h3>
        </TextReveal>
      </div>

      {/* Image */}
      <div className="h-full w-full overflow-hidden absolute">
        <img
          ref={imageRef}
          src={project.coverImage}
          alt={project.title}
          style={{
            transformOrigin: "center center",
            userSelect: "none",
          }}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CarouselCard;