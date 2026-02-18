import Header from "../layout/Header";

export default function HeroSection() {
  return (
   
    <section className="relative px-4 sm:px-6 md:px-10 
                        py-16 sm:py-20 md:py-28 
                        flex flex-col md:flex-row 
                        gap-8 sm:gap-16 md:gap-100">
        
      <h1 className="text-sm sm:text-base md:text-lg font-light mb-4 md:mb-6 uppercase">
        Branding & Design Studio
      </h1>

      <p className="w-full md:max-w-3xl 
                    text-base sm:text-lg md:text-xl 
                    opacity-80">
        The dynamic Fable collective brings together far more than just great
        talent. Thriving in our energetic, collaborative environment – we
        believe that this yields the high quality & consistency of work for
        which we are renowned. <br/>
         <a
        href="/portfolio"
        className="inline-flex items-center gap-3 mt-6 md:mt-10 border-white"
      >
        View Full Portfolio 
      </a>
      </p>

    </section>
  )
}
