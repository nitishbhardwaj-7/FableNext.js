import Image from "next/image"
import Link from "next/link"
import Header from "../layout/Header"

export default function FeaturedProject() {
  return (
    <>
    <Header/>
    <div className="flex px-10 py-30 justify-between">
      <div className="flex flex-col items-start justify-between">
        <h1 className="text-3xl leading-tight font-light">
          Branding, design<br />& website portfolio.
        </h1>

        <Link
          href="/contact"
          className="group inline-flex items-center text-lg"
        >
          Let’s Chat
         
        </Link>
      </div>

      {/* Featured project */}
      <Link href="/project/rebrand-website-for-financial-services-company">
        <div className="group">
          <div className="relative w-300 overflow-hidden mb-8">
            <img
              src="https://cms.fableco.uk/wp-content/uploads/2025/10/FableCo-Header-Image-Book-scaled.jpg"
              alt="The Housing Finance Corporation"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <h3 className="text-2xl font-light mb-1">
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
