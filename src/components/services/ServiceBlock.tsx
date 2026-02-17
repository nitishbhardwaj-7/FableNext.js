"use client"

import { useState } from "react"

export default function ServiceBlock({ service }: any) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="service-panel relative h-screen overflow-hidden border-t border-white/20 pt-20 min-h-[80vh]">
      
      
      <div
        className="
          absolute inset-0 -z-10 w-full
          bg-[url('/images/services.jpg')]
          bg-cover bg-center
          animate-slow-pan
        "
      />

      
      <div className="absolute inset-0 bg-black/35 -z-10" />

      
      <div className="relative z-10 flex justify-between px-10">
        <h2 className="text-4xl w-70 font-light mb-6">
          {service.title}
        </h2>

        <p className="w-150 text-white/70 text-2xl mb-16">
          {service.description}
        </p>

        <div className="space-y-6 w-130">
          {service.items.map((item: any, i: number) => (
            <div key={i} className="border-b border-white/10 pb-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between w-full text-left"
              >
                <span className="text-lg">{item.title}</span>
                <span className="opacity-50">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <p className="mt-4 text-white/60 max-w-2xl">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
