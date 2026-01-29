const articles = [
  {
    title: "Branding for the Renewable Energy Transition",
    href: "/branding-for-the-renewable-energy-transition",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2023/01/Renewables-Website-scaled.jpg",
  },
  {
    title: "Pitch For a New Restaurant Concept in Mayfair London",
    href: "/pitch-for-a-new-restaurant-concept-in-mayfair-london",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2022/10/HUMO-BussCards-scaled.jpg",
  },
  {
    title: "Fable&Co. Technology Branding Experts",
    href: "/fableco-technology-branding-experts",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2021/05/Tech-Website-2-scaled.jpg",
  },
  {
    title: "Professional Branding & Websites for Dental Practices",
    href: "/professional-branding-websites-for-dental-practices",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2020/10/Yorkshire_Dental_Suite_Website_Devices-scaled.jpg",
  },
  {
    title: "Fable&Co. Top 10 Christmas Gift Ideas 2020",
    href: "/fableco-top-10-christmas-gift-ideas-2020",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2020/12/FableCo-Luft-Book2-Gift2.gif",
  },
  {
    title: "Fable’s Font Of The Week",
    href: "/fables-font-of-the-week-gridnik",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2019/09/FableCo-Muse-Instagram-Font-Of-The-Week-Gridnik-Teaser-1.jpg",
  },
  {
    title: "In The Studio With Matt Jones",
    href: "/in-the-studio-with-matt-jones",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2019/08/FableCo_Team_Matt_Jones.jpg",
  },
  {
    title: "Brand Purpose",
    href: "/brand-artistry",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2019/11/Brand-Artistry-Teaser-Image-scaled.jpg",
  },
  {
    title: "CBD Brands To Look Out For",
    href: "/cbd-brands-to-look-out-for",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2019/07/FableCo-Muse-CBD-Juna-scaled.jpg",
  },
  {
    title: "Instagram ‘Likes’ of the Week",
    href: "/instagram-likes-of-the-week-22-11-19",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2019/11/Teaser-Image-1-scaled.jpg",
  },
  {
    title: "Fable&Co. In The Spotlight",
    href: "/fableco-in-the-spotlight",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2019/11/FableCo_Muse_Featured_In-1.jpg",
  },
  {
    title: "Slab City & Salvation Mountain",
    href: "/slab-city-salvation-mountain",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2019/10/FableCo-Muse-Salvation-Mountain-scaled.jpg",
  },
]

function chunk<T>(arr: T[], size = 2) {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}


export default function ArticlesGrid() {
  const rows = chunk(articles, 2)

  return (
    <section className="pb-40">
      <div className="mx-10 space-y-32">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-2 gap-24"
          >
            {row.map((article, i) => (
              <a
                key={i}
                href={article.href}
                className="group flex justify-between"
              >
                <h3 className="text-xl font-light max-w-md">
                  {article.title}
                </h3>
                <figure className="overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-w-150 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>

                
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

