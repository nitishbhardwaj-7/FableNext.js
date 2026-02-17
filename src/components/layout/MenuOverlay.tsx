"use client"

import TextLink from "../ui/TextLink"

type Props = {
  open: boolean
  onClose: () => void
}

export default function MenuOverlay({ open, onClose }: Props) {
  return (
    <div
       className={`
    fixed inset-0 z-[100]
    bg-black
    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${open ? "translate-y-0 opacity-100 backdrop-blur-xl" : "translate-y-full opacity-0"}
  `}
    >
     
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-2xl text-white"
        aria-label="Close menu"
      >
        ✕
      </button>

     
      <nav className="h-full flex flex-col items-center justify-center gap-10 uppercase text-4xl text-black">
        <TextLink href="/work" onClick={onClose}>Work</TextLink>
        <TextLink href="/services" onClick={onClose}>Services</TextLink>
        <TextLink href="/studio" onClick={onClose}>Studio</TextLink>
        <TextLink href="/muse" onClick={onClose}>Muse</TextLink>
        <TextLink href="/contact" onClick={onClose}>Contact</TextLink>
      </nav>
    </div>
  )
}
