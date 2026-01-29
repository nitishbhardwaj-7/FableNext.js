"use client"

import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

export function initLenis() {
  if (lenis) return lenis

  lenis = new Lenis({
    smooth: true,
    lerp: 0.08,
  })

  // 🔥 THIS IS CRITICAL
  lenis.on("scroll", ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  ScrollTrigger.refresh()

  return lenis
}
