import HeroSection from "@/components/studio/HeroSection"
import VideoSection from "@/components/studio/VideoSection"
import ImageGridSection from "@/components/studio/ImageGridSection"
import PeopleSection from "@/components/studio/PeopleSection"
import TextSection from "@/components/studio/TextSection"
import Header from "@/components/layout/Header"
import Footer from "@/components/sections/Footer"
import ClientsLogos from "@/components/sections/ClientLogos"
import Testimonials from "@/components/sections/Testimonials"

export default function StudioPage() {
  return (
    <main className="bg-[#1c1c1c] text-white">
      <Header/>
      <HeroSection />
      <VideoSection />
      <ImageGridSection />
      <PeopleSection />
      <div className="py-32 flex flex-col gap-25">
        <TextSection
        title="Purpose Statement"
        excerpt="Thoughtful Creativity, Fuelling Ambition."
        content="Read More"
      />
      <TextSection
        title="Culture Statement"
        excerpt="Agency culture is of paramount importance. Therefore at Fable&Co. you will benefit from our team of creatively accomplished, logically gifted, genuine folk, who are all obsessive in their quest for design perfection."
        content="Read More"
      />
      </div>
      
      <div className="px-10">
        <img className="" src="https://cms.fableco.uk/wp-content/uploads/2025/07/8-2048x1042.avif" alt="" />
      </div>

       <section
               className="bg-[#faf8f5] relative z-20 mt-25 white-section">
                <div className="spacer h-30"></div>
                <ClientsLogos/>
                <Testimonials/>
              </section>  
               <Footer/>
    </main>
  )
}
