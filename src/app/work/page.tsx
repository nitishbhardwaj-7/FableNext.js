
import Header from "@/components/layout/Header"
import Footer from "@/components/sections/Footer"
import FeaturedProject from "@/components/work/FeaturedProject"
import ProjectsGrid from "@/components/work/ProjectsGrid"

export default function WorkPage() {
  return (
    <>
      <main className="min-h-screen bg-[#1c1c1c] text-white relative overflow-hidden">
        <section className="pb-32">
          <FeaturedProject />
        </section>

        <section className="pb-40">
          <ProjectsGrid />
        </section>
        <Footer/>
      </main>
    </>
  )
}
