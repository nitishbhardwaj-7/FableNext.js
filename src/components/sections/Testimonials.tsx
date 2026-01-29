const TESTIMONIALS = [
  {
    quote:
      "Since the first meeting we were blown away by the quality of ideas at Fable&Co. We were at a transformational phase for our business and Fable were fantastic in their collaborative approach.",
    author: "Eddie Harrison",
    role: "Co-Founder & CPO, Navro",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/09/ASB_7263-scaled.jpg",
  },
  {
    quote:
      "Working with the team at Fable&Co. has been one of the highlights of setting up Pallas. The team immediately understood our vision and delivered a truly exceptional brand and website.",
    author: "Natasha Harrison",
    role: "Founder & Managing Partner, Pallas Partners",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/09/FableCo-Team-Photography-01-1-scaled.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#faf8f5] text-black py-32">
      <div className="max-w-7xl mx-auto px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div>
            <img
              src={TESTIMONIALS[0].image}
              alt=""
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Quote */}
          <div>
            <blockquote>
              <p className="text-2xl font-light leading-relaxed">
                “{TESTIMONIALS[0].quote}”
              </p>

              <footer className="mt-10">
                <strong className="block">
                  {TESTIMONIALS[0].author}
                </strong>
                <span className="text-black/60">
                  {TESTIMONIALS[0].role}
                </span>
              </footer>
            </blockquote>
          </div>

        </div>

      </div>
    </section>
  )
}
