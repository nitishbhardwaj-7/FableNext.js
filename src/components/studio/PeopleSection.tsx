const people = [
  {
    name: "Ross Davison",
    role: "Creative / Managing Director",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/07/ross.jpg",
    bio:
      "Ross launched Fable&Co. after over a decade of global branding experience.",
  },
  {
    name: "Jack Archer",
    role: "Director",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/07/jack.jpg",
    bio:
      "Jack offers senior experience implementing dramatically creative brand strategies.",
  },
  {
    name: "Issy Hall",
    role: "Design Director",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/07/issy.jpg",
    bio:
      "Issy provides Fable&Co. with an abundance of creative ideas & talent.",
  },
   {
    name: "Ross Davison",
    role: "Creative / Managing Director",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/07/ross.jpg",
    bio:
      "Ross launched Fable&Co. after over a decade of global branding experience.",
  },
  {
    name: "Jack Archer",
    role: "Director",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/07/jack.jpg",
    bio:
      "Jack offers senior experience implementing dramatically creative brand strategies.",
  },
  {
    name: "Issy Hall",
    role: "Design Director",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/07/issy.jpg",
    bio:
      "Issy provides Fable&Co. with an abundance of creative ideas & talent.",
  },
]

export default function PeopleSection() {
  return (
    <section className="mx-4 sm:mx-6 md:mx-10 
                        py-16 sm:py-20 md:py-28 
                        border-b border-white">

      <div className="flex flex-col md:flex-row 
                      mb-12 sm:mb-16 md:mb-25 
                      gap-8 sm:gap-12 md:gap-105">

        <h1 className="text-sm sm:text-base md:text-base">
          THE COLLECTIVE
        </h1>

        <p className="w-full md:w-200 
                      text-base sm:text-lg md:text-xl">
          At Fable&Co. we’re more than just a collection of skilled individuals. What defines us is the energy we share, the ideas we build together, and the culture of collaboration that fuels everything we do. It’s this synergy that ensures our work is distinguished by the level of excellence people have come to expect from us.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">

        <h2 className="text-2xl sm:text-4xl md:text-5xl 
                       mb-10 sm:mb-12 md:mb-16 
                       w-full md:w-400">
          Our People
        </h2>

        <div className="overflow-x-auto">
          <div className="flex flex-nowrap gap-8 sm:gap-12 md:gap-16">
            {people.map((person) => (
              <div
                key={person.name}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] 
                           max-w-[90%] sm:max-w-[450px] md:max-w-[590px] 
                           shrink-0"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="mb-4 sm:mb-6 w-full"
                />

                <h3 className="text-lg sm:text-xl">{person.name}</h3>
                <p className="opacity-60 mb-3 sm:mb-4 text-sm sm:text-base">
                  {person.role}
                </p>
                <p className="text-sm opacity-80">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
