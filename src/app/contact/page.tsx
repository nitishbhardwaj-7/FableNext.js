import Header from "@/components/layout/Header";
import Link from "next/link"

export default function Contact (){
  return(
    <main className="bg-[#1c1c1c] min-h-screen text-white">

    <Header/>

    <section className="px-10 py-28">
        <div className="flex">
            <h2 className="text-lg w-135 uppercase">CONTACT</h2>
      <p className="text-2xl opacity-80 w-200">We collaborate with ambitious brands & enterprising people; we’d love to
craft something significant together.
      </p>
        </div>
    </section>

    <section>
       <footer className="relative bg-transparent border-t border-white text-white overflow-hidden">

      <div className="relative px-10 py-20">

        <div className="flex gap-100">

             {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-fit">

          {/* Studio */}
          <div>
            <h3 className="mb-4 uppercase text-gray-300">The Studio</h3>
            <p className="text-white/70">
              Queens Park Villa,<br />
              30 West Drive,<br />
              Brighton, BN2 0QU
            </p>

            <Link href="/contact/brighton-branding-agency" className="mt-6 inline-block">
              Brighton Studio →
            </Link>
          </div>

          {/* London */}
          <div>
            <h3 className="mb-4 uppercase text-gray-300">London Office</h3>
            <p className="text-white/70">
              14 Popham Gardens,<br />
              Lower Richmond Road,<br />
              Richmond, TW9 4LJ
            </p>

            <Link href="/contact/london-branding-agency" className="mt-6 inline-block">
              London Office →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 uppercase text-gray-300">Contact</h3>
            <p className="text-white/70">
              <a href="mailto:enquiries@fableco.uk">enquiries@fableco.uk</a><br />
              <a href="tel:+442036329952">+44 203 6329952</a>
            </p>

            <Link href="/new-project" className="mt-6 inline-block">
              Start a Project →
            </Link>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 uppercase text-gray-300">Connect</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="https://www.linkedin.com/company/fable&co-/" target="_blank">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/fable_co/" target="_blank">Instagram</a></li>
              <li><a href="https://dribbble.com/FableCo" target="_blank">Dribbble</a></li>
              <li><a href="https://www.behance.net/FableCo" target="_blank">Behance</a></li>
              <li><a href="https://www.pinterest.co.uk/fableco/" target="_blank">Pinterest</a></li>
              <li><a href="https://en-gb.facebook.com/fableandco/" target="_blank">Facebook</a></li>
            </ul>
          </div>

        </div>

        <div>
             {/* Contact form */}
          <div className="md:col-span-2">
            <h2 className="text-xl mb-8 uppercase text-gray-300">Get in Touch</h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name*"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email*"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-white/40 pb-3 outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-transparent border-b border-white/40 pb-3 outline-none"
              />
              <textarea
                placeholder="Message*"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 outline-none resize-none"
                rows={3}
              />

              <button className="mt-6 inline-flex items-center gap-3 group">
                <span>Send Message</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>

        </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-20" />

        {/* Footer bar */}
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm text-white/70">
          <Link href="/privacy-cookies-policy">
            Privacy / Cookies Policy
          </Link>

          <ul className="flex gap-8">
            <li><Link href="/portfolio">Work</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/studio">Studio</Link></li>
            <li><Link href="/muse">Muse</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col md:flex-row justify-between gap-6 text-xs text-white/50">
          <p>
            Fable&Co. Limited VAT Reg No. 198 5114 77 · Company Reg No. GB 09280304
          </p>
          <p>© 2015 – {new Date().getFullYear()} Fable&Co.</p>
        </div>

      </div>
    </footer>
    </section>


    </main>
  )
}