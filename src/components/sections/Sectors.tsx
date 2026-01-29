"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectorCard } from "./SectorCard"

gsap.registerPlugin(ScrollTrigger)

export default function Sectors() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const scrollAmount = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",          // section fully visible
          end: `+=${scrollAmount}`,     // horizontal distance
          scrub: 1,
          pin: section,                 // 🔑 pin EVERYTHING in this section
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true, // enable only for debugging
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1c1c1c] text-white"
    >
      {/* INTRO / TEXT — THIS WILL NOW PIN */}
      <div className=" py-20 flex gap-110 border-t border-white mx-10">
        <h2 className="uppercase">
          Areas of Focus
        </h2>
        <p className="mt-0 text-2xl font-light">
          Working at the intersection of strategy & creativity, developing
          high-growth corporate brands <br/> that not only lead today but inspire
          the possibilities of tomorrow.
        </p>
      </div>

      {/* HORIZONTAL CARDS */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-16 px-10 w-max"
        >
          <SectorCard
            title="Energy, Climate "
            secondtitle=" & Sustainability"
            video="https://cms.fableco.uk/wp-content/uploads/2025/11/ENERGY_CLIMATE_SUSTAINABILITY-SHOWREEL-Small-Compressed-v5.mp4"
            description="The world is changing fast - and you’re leading the charge. We help energy, climate, and sustainability brands communicate purpose, build belief, and inspire action through strategy-led brand design, digital and marketing."
          />
          <SectorCard
            title="Professional "
            secondtitle=" & Legal Services"
            video="https://cms.fableco.uk/wp-content/uploads/2025/09/LAW_FIRM_SHOWREEL-Small-opt.mp4"
            description="Reputation is your most valuable asset - we help you protect and amplify it. From brand positioning to visual identity and websites, we help you create a powerful brand image and presence that drives recognition, engagement, and growth."
          />
          <SectorCard
            title="Technology "
             secondtitle=" & Innovation"
            video="https://cms.fableco.uk/wp-content/uploads/2025/09/TECH_INNOVATION_SHOWREEL-Small-opt.mp4"
            description="Innovative ideas deserve standout brands. We help tech and innovation leaders bring clarity to complexity, tell impactful stories, and create brand and digital experiences that drive momentum and market growth."
          />
          <SectorCard
            title="Finance, Insurance "
            secondtitle=" & Investments"
            video="https://cms.fableco.uk/wp-content/uploads/2025/10/FINANCIAL-INVESTMENT-REEL-v17-940x540-Opt.mp4"
            description="In today’s financial world, trust is the currency that matters most. We help finance and investment brands cut through noise with sharp strategy, fearless identity, and digital platforms built for what’s next - driving trust, accelerating engagement, and creating lasting value."
          />
        </div>
      </div>
    </section>
  )
}
