"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/layout/Header";
import ClientsLogos from "@/components/sections/ClientLogos";
import Expertise from "@/components/sections/Expertise";
import ImageGrid from "@/components/sections/ImageGrid";
import Projects from "@/components/sections/Projects";
import Sectors from "@/components/sections/Sectors";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {

   useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const whiteSection = document.querySelector(".white-section")
    if (!whiteSection) return

    gsap.to(whiteSection, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: whiteSection,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    })
  })

  return () => ctx.revert()
}, [])


  return (
    <>
      <main className="bg-[#1c1c1c] overflow-x-hidden">
        <header className="absolute top-0 left-0 w-full z-50">
          <Header />
        </header>

        <section className="relative min-h-[70vh]">
           {/* Mobile Image */}
  <img
    src="https://cms.fableco.uk/wp-content/uploads/2025/09/FableCo-Mobile-Header-Windmill-1.jpg"
    alt="Windmills Mobile"
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  />

  {/* Desktop Image */}
  <img
    src="https://cms.fableco.uk/wp-content/uploads/2025/09/FableCo-Header-Windmills.jpg"
    alt="Windmills Desktop"
    className="absolute inset-0 w-full h-full object-cover hidden md:block"
  />

          <div className="overlay text absolute text-white top-30 md:top-50 px-10">
            <h1 className="uppercase">
              London Based Strategic Branding, <br /> Identity and Web Design Agency
            </h1>
            <h1 className="pt-60 text-2xl sm:text-4xl md:text-6xl font-light">
              Advancing progress and future-proofing your <br />
              business for tomorrow’s world of opportunity.
            </h1>

          </div>

        </section>

        <section>
           {/* Mobile Video */}
  <video
    className="w-full h-auto mb-10 sm:mb-16 md:hidden"
    autoPlay
    loop
    muted
    playsInline
    src="https://cms.fableco.uk/wp-content/uploads/2025/09/FABLECO_SHOWREEL_1x1-Small.mp4"
  ></video>

  {/* Desktop / Tablet Video */}
  <video
    className="w-full h-auto mb-10 sm:mb-16 md:mb-25 hidden md:block"
    autoPlay
    loop
    muted
    playsInline
    src="https://cms.fableco.uk/wp-content/uploads/2025/08/FABLECO_SHOWREEL-Small.mp4"
  ></video>
        </section>

        <section>
            <Sectors />
        </section>

        <section>
          <Expertise/>
        </section>

        <section>
          <ImageGrid/>
        </section>

        <section>
          <Projects/>
        </section>

        <section
         className="bg-[#faf8f5] relative z-20 white-section">
          <div className="spacer h-30"></div>
          <ClientsLogos/>
          <Testimonials/>
        </section>
        <section className="relative z-10 mt-[-740]">
          <Footer/>
        </section>
      </main>

    </>
  )
}
