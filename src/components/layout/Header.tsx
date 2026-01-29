"use client"
import Image from "next/image"
import TextLink from "../ui/TextLink"

export default function Header() {
  return (
    <header>
      <div className="h-30 border-b border-white mx-10 bg-transparent">
        <div className="flex justify-between h-30 items-center">

            <div>
          <Image
  src="/images/logo.svg"
  alt="Fable logo"
  width={140}
  height={40}
  priority
/>  
        </div>
        <div className="uppercase flex gap-11">
           <TextLink href="/work">Work</TextLink>
           <TextLink href="/services">Services</TextLink>
           <TextLink href="/studio">Studio</TextLink>
           <TextLink href="/muse">Muse</TextLink>
           <TextLink href="/contact">Contact</TextLink>
        </div>

        </div>
      </div>
    </header>
  )
}
