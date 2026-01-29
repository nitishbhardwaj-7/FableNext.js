import ProjectCard from "./ProjectCard"

const PROJECTS = [
  {
    title: "Branding & Website for FinTech Company",
    client: "Zodia Custody",
    image: "https://cms.fableco.uk/wp-content/uploads/2024/08/Screenshot-2024-08-09-at-14.40.27-scaled.png",
    href: "/project/zodia-custody",
  },
    {
    href: "/project/zodia-custody",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/08/Screenshot-2024-08-09-at-14.40.27-scaled.png",
    title: "Branding & Website for FinTech Company",
    client: "Zodia Custody",
  },
  {
    href: "/project/pallas-partners",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2022/01/FableCo-Pallas-Law-Firm-Branding-Business-Cards-V3-scaled.jpg",
    title: "Law Firm Branding & Website",
    client: "Pallas Partners",
  },
  {
    href: "/project/aleto-investment-platform",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2025/04/Aleto-book-mock-scaled.png",
    title: "Hedge Fund Brand Identity & Website",
    client: "Aleto Investment Platform",
  },
  {
    href: "/project/black-fountain",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/05/FableCo-BlackFountain-Stationery.jpg",
    title: "Venture Capital Branding & Website",
    client: "Black Fountain",
  },
  {
    href: "/project/navro",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/02/FableCo-Navro-Website-Homepage.jpg",
    title: "Branding & Website for Global Payments FinTech",
    client: "Navro",
  },
  {
    href: "/project/wordstone",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/02/FableCo-Wordstone-Business-Card-01.jpg",
    title: "Branding & Website for Distinguished Law Firm",
    client: "Wordstone",
  },
  {
    href: "/project/cbr-sustainability-partners",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/02/CBR-PPT-2-1-scaled.jpg",
    title: "Branding & Website Design for Sustainability Consultancy",
    client: "CBR Sustainability Partners",
  },
  {
    href: "/project/hoburne-holidays",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/10/Hoburne-Deck-Chairs-scaled.jpg",
    title: "Hospitality & Tourism Branding",
    client: "Hoburne Holidays",
  },
  {
    href: "/project/conrad-group",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/08/Conrad-Spot-UV-cropped.jpg",
    title: "Branding & Website for Investment Group",
    client: "Conrad Group",
  },
  {
    href: "/project/susi-partners",
    image:
      "https://cms.fableco.uk/wp-content/uploads/2024/04/SUSI-Icon-Print.jpg",
    title: "Branding & Website for Sustainable Investment Firm",
    client: "SUSI Partners",
  },
  {
    title: "Law Firm Branding & Website",
    client: "Pallas Partners",
    image: "https://cms.fableco.uk/wp-content/uploads/2022/01/FableCo-Pallas-Law-Firm-Branding-Business-Cards-V3-scaled.jpg",
    href: "/project/pallas-partners",
  },
  // add the rest here
]

export default function ProjectsGrid() {
  return (
    <div className="max-w-[1850px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 mt-[-160]">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.href} {...project} />
      ))}
    </div>
  )
}
