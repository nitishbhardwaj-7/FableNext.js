"use client"

import { useState } from "react"
import Image from "next/image"
import TextLink from "../ui/TextLink"
import MenuOverlay from "./MenuOverlay"
import Link from "next/link"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
     <header>
  <div className="h-20 md:h-30 border-b border-white mx-4 sm:mx-6 md:mx-10 bg-transparent">
    <div className="flex justify-between h-20 md:h-30 items-center">
      
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/images/logo.svg"
          alt="Fable logo"
          width={140}
          height={40}
          priority
          className="cursor-pointer w-24 sm:w-28 md:w-auto"
        />
      </Link>

      <div className="uppercase hidden md:flex gap-6 lg:gap-11">
        <TextLink href="/work">Work</TextLink>
        <TextLink href="/services">Services</TextLink>
        <TextLink href="/studio">Studio</TextLink>
        <TextLink href="/muse">Muse</TextLink>
        <TextLink href="/contact">Contact</TextLink>

        <span className="w-6 h-0.5 rotate-90 bg-white mt-2.5" />

        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1 mt-1.5"
          aria-label="Open menu"
        >
          <span className="w-20 md:w-26 h-0.5 bg-white" />
          <span className="w-20 md:w-26 h-[2px] bg-white" />
        </button>
      </div>
        <button
  onClick={() => setOpen(true)}
  className="md:hidden flex flex-col gap-1"
  aria-label="Open menu"
>
  <span className="w-8 h-0.5 bg-white" />
  <span className="w-8 h-0.5 bg-white" />
</button>


    </div>
  </div>
</header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}
