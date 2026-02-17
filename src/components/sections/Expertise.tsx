"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExpertiseItem } from "./ExpertiseItem"

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { title: "Strategy", desc: "Grounded in research, driven by strategy, and crafted for impact — we turn insight into distinctive brand frameworks that build relevance, deepen connection, and drive momentum." },
  { title: "Branding", desc: "Designed to elevate, we craft impeccable visual and verbal identities that reflect who you are today and where you're headed next." },
  { title: "Design", desc: "Inspiring, striking, and strategic. We design communications that elevate perception, build recognition, and strengthen your brand’s reputation." },
  { title: "Websites", desc: "Smart, functional, and beautifully designed websites that look sharp, work hard, and drive results." },
  { title: "Marketing", desc: "Ideas that move people. We create smart, purposeful campaigns and content that connect with clarity and impact." },
]

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useLayoutEffect(() => {
  const section = sectionRef.current
  if (!section) return

  const mm = gsap.matchMedia()

  mm.add("(min-width: 768px)", () => {
    const tl = gsap.timeline({
      
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
      
    })

    itemsRef.current.forEach((item) => {
      tl.fromTo(
        item,
        { y: 600 },
        { y: 0, ease: "power2.out" },
        "<50%"
      )
    })
  })

  return () => mm.revert()
}, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1c1c1c] text-white 
mt-20 md:mt-40 
border-t border-white 
mx-4 md:mx-10"
    >
      {/* Heading */}
      <div className="py-12 md:py-20 
flex flex-col md:flex-row 
gap-8 md:gap-120 
font-light">
        <h2 className="uppercase tracking-wide">Expertise</h2>
        <p className="text-2xl max-w-3xl">
          Grounded in deep research and sharp strategy, we define clear paths forward to uncover growth - where every creative move is strategically led. We craft purposeful identities and seamless brand experiences across digital, web, and marketing - made for impact today, and momentum tomorrow.
        <button className="mt-10 text-lg hidden">Our Services</button>
        </p>
      </div>
      

      {/* SIDE-BY-SIDE STACK */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-max gap-12 md:gap-20">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => {
                if (el) itemsRef.current[i] = el
              }}
            >
              <ExpertiseItem
                title={item.title}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
