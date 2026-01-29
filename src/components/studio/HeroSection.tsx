import Header from "../layout/Header";

export default function HeroSection() {
  return (
   
    <section className="relative px-10 py-28 flex gap-100">
        
      <h1 className="text-lg font-light mb-6 uppercase">
        Branding & Design Studio
      </h1>

      <p className="max-w-3xl text-xl opacity-80">
        The dynamic Fable collective brings together far more than just great
        talent. Thriving in our energetic, collaborative environment – we
        believe that this yields the high quality & consistency of work for
        which we are renowned. <br/>
         <a
        href="/portfolio"
        className="inline-flex items-center gap-3 mt-10 border-white"
      >
        View Full Portfolio 
      </a>
      </p>

    </section>
  )
}
