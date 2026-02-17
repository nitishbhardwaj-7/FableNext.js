import Image from "next/image"
import Link from "next/link"
import Header from "../layout/Header"

export default function FeaturedProject() {
  return (
    <>
      <Header/>
      <div className="flex flex-col lg:flex-row px-6 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 lg:py-30 gap-16 lg:gap-20 justify-between">
        
        <div className="flex flex-col items-start justify-between gap-10 lg:gap-0 max-w-xl">
          <h1 className="text-2xl sm:text-3xl leading-tight font-light">
            Branding, design<br />& website portfolio.
          </h1>

          <Link
            href="/contact"
            className="group inline-flex items-center text-base sm:text-lg"
          >
            Let’s Chat
          </Link>
        </div>

        {/* Featured project */}
        <Link href="/project/rebrand-website-for-financial-services-company" className="w-full lg:w-auto">
          <div className="group w-full">
            
            <div className="relative w-full lg:w-300 overflow-hidden mb-6 sm:mb-8">
              <img
                src="https://cms.fableco.uk/wp-content/uploads/2025/10/FableCo-Header-Image-Book-scaled.jpg"
                alt="The Housing Finance Corporation"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-light mb-1">
              Rebrand & Website for Financial Services Company
            </h3>
            <p className="text-white/60">
              The Housing Finance Corporation
            </p>
          </div>
        </Link>

      </div>
    </>
  )
}
