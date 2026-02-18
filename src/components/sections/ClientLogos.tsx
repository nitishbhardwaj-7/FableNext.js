const LOGOS = [
  "https://cms.fableco.uk/wp-content/uploads/2025/07/setia.svg",
  "https://cms.fableco.uk/wp-content/uploads/2025/07/pallas.svg",
  "https://cms.fableco.uk/wp-content/uploads/2025/07/astraea.svg",
  "https://cms.fableco.uk/wp-content/uploads/2025/09/Tion-Dark.svg",
  "https://cms.fableco.uk/wp-content/uploads/2025/09/Microsoft-Dark-1.svg",
  "https://cms.fableco.uk/wp-content/uploads/2025/07/kindleworth.svg",
  "https://cms.fableco.uk/wp-content/uploads/2025/09/Oracle_Dark.svg",
  "https://cms.fableco.uk/wp-content/uploads/2025/09/Standard_Chartered_grey-1.svg",
]

export default function ClientsLogos() {
  return (
    <section className="bg-[#faf8f5] text-gray-500 
                        py-12 sm:py-16 md:py-18 
                        mx-4 sm:mx-6 md:mx-10 
                        border-t border-gray-400">
      <div>

        {/* Intro */}
        <div className="flex flex-col md:flex-row 
                        gap-8 sm:gap-16 md:gap-120 
                        mb-12 sm:mb-16 md:mb-20">

          <h2 className="uppercase text-sm sm:text-base md:text-base">
            Our Clients
          </h2>

          <p className="text-base sm:text-xl md:text-2xl 
                        font-light 
                        w-full md:max-w-4xl">
            Partnering with progressive businesses to uncover their
            true purpose, helping them drive meaningful change &
            move the world forward.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
          {LOGOS.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center 
                         border border-gray-300 
                         h-32 sm:h-48 md:h-80"
            >
              <img
                src={logo}
                alt=""
                className="max-h-6 sm:max-h-8 md:max-h-10 
                           w-auto opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
