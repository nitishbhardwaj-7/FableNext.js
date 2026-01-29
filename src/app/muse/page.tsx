import Header from "@/components/layout/Header"
import MuseHero from "@/components/muse/MuseHero"
import FeaturedArticle from "@/components/muse/FeaturedArticle"
import ArticlesGrid from "@/components/muse/ArticlesGrid"

export default function MusePage() {
  return (
    <main className="bg-[#1c1c1c] text-white overflow-x-hidden">

      <Header />

      <div className="flex justify-between">
          <MuseHero />



      <FeaturedArticle />
      </div>

      <ArticlesGrid />
    </main>
  )
}
