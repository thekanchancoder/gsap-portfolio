import CarouselCard from "./CarouselCard";
import { useEffect, useRef } from "react";
import gsap from "@/libs/gsap";

const card_w = 250;
const card_h = 300;
const scale = 1.2;
const card_gap = 20;
const duration = 25;
const track_h = card_h + scale;

const InfiniteCarouselCard = ({ projects }) => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const singleCardWidth = projects.length * (card_w + card_gap);

    tweenRef.current = gsap.to(trackRef.current, {
      x: -singleCardWidth,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    return () => tweenRef.current?.kill();
  }, [projects]);

  const doubled = [...projects, ...projects];

  return (
    <div
    style={{
        padding: `${track_h * 0.6}px 0 24px`,
      }}
      className="overflow-hidden "
      
    >
      <div
        ref={trackRef}
        className="flex flex-row items-center"
        style={{
       
          gap: `${card_gap}px`,
          width: "max-content",
        }}
      >
        {doubled.map((project, i) => (
          <CarouselCard
            key={i}
            project={project}
            onHoverStart={() => tweenRef.current?.pause()}
            onHoverEnd={() => tweenRef.current?.play()}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarouselCard;