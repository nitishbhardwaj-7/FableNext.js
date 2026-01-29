import Link from "next/link"

const PROJECTS = [
  {
    title: "Law Firm Branding & Website",
    client: "Pallas Partners",
    href: "/project/pallas-partners",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2022/01/FableCo-Pallas-Law-Firm-Branding-Business-Cards-V3-scaled.jpg",
    span: 1,
  },
  {
    title: "Renewable Energy Branding & Website",
    client: "Tion Renewables",
    href: "/project/tion-renewables",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2022/09/Tion-Website-Ipadphone-3480x2880-1-scaled.jpg",
    span: 1,
  },
  {
    title: "Prestigious Design School Brand Refresh",
    client: "School of Design",
    href: "/project/school-of-design",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/08/FableCo_School_of_Design_Stationery.jpg",
    span: 1,
  },
  {
    title:
      "Rebrand & Website for Leading Law Firm Consultancy & Advisory",
    client: "Kindleworth",
    href: "/project/kindleworth",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2023/05/Kindleworth-Brand-Identity-Guidelines-Spine-scaled.jpg",
    span: 2,
  },
  {
    title: "Rebrand & Website for Financial Services Company",
    client: "The Housing Finance Corporation",
    href: "/project/rebrand-website-for-financial-services-company",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/10/FableCo-Header-Image-Book-scaled.jpg",
    span: 1,
  },
]

export default function Projects() {
  return (
    <section className="bg-[#1c1c1c] text-white py-18 mx-10 border-t border-white">
      <div className="">

        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-60 mb-24">
          <div className="max-w-md">
            <h2 className="uppercase tracking-wide">
              Featured Branding & Website Projects
            </h2>
          </div>

          <div className="flex-1">
            <p className="text-2xl font-light max-w-3xl">
              Our work sparks real change — sharpening your brand,
              amplifying your message, and turning strategy into
              momentum. We help you connect faster, build trust,
              and grow with purpose across every touchpoint.
            </p>

            <div className="mt-10">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 group"
              >
                <span>View All Work</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PROJECTS.map((project) => (
            <Link
              key={project.client}
              href={project.href}
              className={`group ${
                project.span === 2 ? "md:col-span-2" : ""
              }`}
            >
              <div>
                <figure className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>

                <h3 className="mt-6 text-lg font-medium">
                  {project.title}
                </h3>
                <p className="text-white/70">
                  {project.client}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
