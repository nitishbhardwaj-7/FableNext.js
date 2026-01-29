import Link from "next/link"

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function TextLink({
  href,
  children,
  className = "",
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`relative inline-block font-normal text-white
        after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:w-0 after:bg-current
        after:transition-all after:duration-300 after:ease-out
        hover:after:w-full
        ${className}`}
    >
      {children}
    </Link>
  )
}
