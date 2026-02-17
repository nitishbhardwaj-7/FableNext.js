"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "./services.data"
import ServiceBlock from "./ServiceBlock"

gsap.registerPlugin(ScrollTrigger)

export default function ServicesList() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const panels = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll(".service-panel")
    )

    panels.forEach((panel, i) => {
      const nextPanel = panels[i + 1]

      
      panel.style.zIndex =  `${i + 1}`

      
      if (!nextPanel) return

      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: nextPanel,
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      })
    })

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="pb-40 px-10">
      <div className="space-y-32">
        {services.map((service, i) => (
          <ServiceBlock key={i} service={service} />
        ))}
      </div>
    </section>
  )
}
