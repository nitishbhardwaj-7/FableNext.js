import Link from "next/link"

export default function ImageGrid() {
  return (
    <section className="bg-[#1c1c1c] text-white 
py-12 md:py-18 
my-16 md:my-25 
border-t border-white 
mx-4 md:mx-10">
      <div className="">

        {/* Intro */}
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-8 md:gap-95">
            <h2 className="uppercase w-full md:w-45">
              Our Studio
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-light">
              The dynamic Fable collective brings together far more than just
              great talent. Thriving in our <br/> energetic, collaborative
              environment – we believe that this yields the high quality &
              consistency <br/> of work for which we are renowned.
               <div className="mt-10">
              <Link
                href="/studio"
                className="inline-flex items-center gap-3 group"
              >
                <span>About Us</span>
                <span className="overflow-hidden">
                  →
                </span>
              </Link>
            </div>
            </p>

           
          </div>

          {/* Images */}
          <div className="flex-1 mt-16 md:mt-30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

              {/* Left image */}
              <div className="md:col-span-1">
                <img
                  src="https://cms.fableco.uk/wp-content/uploads/2025/07/image-grid-1.jpg"
                  alt=""
                  className="w-full h-auto object-cover h-[360px] md:h-[520px] lg:h-[640px]"
                  loading="lazy"
                />
              </div>

              {/* Right image */}
              <div className="md:col-span-2">
                <img
                  src="https://cms.fableco.uk/wp-content/uploads/2025/07/3.jpg"
                  alt=""
                  className="w-full h-auto object-cover h-[360px] md:h-[520px] lg:h-[640px]"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
