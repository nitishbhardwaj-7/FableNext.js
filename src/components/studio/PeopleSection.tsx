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
       <section className="mx-10 py-28 border-b border-white">

        <div className="flex mb-25 gap-105">
            <h1>THE COLLECTIVE</h1>
            <p className="w-200 text-xl">At Fable&Co. we’re more than just a collection of skilled individuals. What defines us is the energy we share, the ideas we build together, and the culture of collaboration that fuels everything we do. It’s this synergy that ensures our work is distinguished by the level of excellence people have come to expect from us.
</p>
        </div>

        <div className="flex">

             <h2 className="text-5xl mb-16 w-400">Our People</h2>

      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-16">
          {people.map((person) => (
            <div
              key={person.name}
              className="min-w-[320px] max-w-[590px] shrink-0"
            >
              <img
                src={person.image}
                alt={person.name}
                className="mb-6 w-full"
              />

              <h3 className="text-xl">{person.name}</h3>
              <p className="opacity-60 mb-4">{person.role}</p>
              <p className="text-sm opacity-80">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>

        </div>
     
    </section>
  )
}
