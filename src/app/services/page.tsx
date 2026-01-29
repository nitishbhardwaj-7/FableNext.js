import ServicesHero from "@/components/services/ServicesHero"
import ServicesList from "@/components/services/ServicesList"
import FeaturedProjects from "@/components/services/FeaturedProjects"
import Footer from "@/components/sections/Footer"
import Header from "@/components/layout/Header"

export default function ServicesPage() {
  return (
    <main className="bg-[#1c1c1c] text-white">
      <Header/>
      <ServicesHero />
      <ServicesList />
      <FeaturedProjects />
      <Footer/>
    </main>
  )
}
