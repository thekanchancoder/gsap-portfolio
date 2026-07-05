"use client"

import gsap from "@/libs/gsap"
import { useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"

const STRIP_COUNT = 10

const createStrips = () => {
  const overlay = document.createElement("div")

  overlay.id = "page-transition-overlay"
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    display: flex;
  `

  for (let i = 0; i < STRIP_COUNT; i++) {
    const strip = document.createElement("div")

    strip.style.cssText = `
      flex: 1;
      height: 100%;
     background-color: ${i % 2 === 0 ? "white" : "black"};
      transform: scaleY(0);
      transform-origin: bottom;
    `

    overlay.appendChild(strip)
  }

  document.body.appendChild(overlay)

  return overlay
}

const removeOverlay = () => {
  const el = document.getElementById("page-transition-overlay")
  if (el) el.remove()
}

const useViewTransition = () => {
  const router = useRouter()

  useEffect(() => {
    removeOverlay()
  }, [])

  const navigateTo = useCallback(
    (href) => {
      const overlay = createStrips()
      const strips = Array.from(overlay.children)

      gsap.to(strips, {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.inOut",
        stagger:{
          each: 0.04,
          from:'edges'
        },
        onComplete: () => {
          router.push(href)

          gsap.to(strips, {
            scaleY: 0,
            duration: 0.4,
            ease: "power2.inOut",
            delay: 0.2,
           stagger:{
          each: 0.04,
          from:'edges'
        },
            transformOrigin: "top",
            onComplete: removeOverlay,
          })
        },
      })
    },
    [router]
  )

  return navigateTo
}

export default useViewTransition