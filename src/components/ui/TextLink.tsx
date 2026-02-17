import Link from "next/link"

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export default function TextLink({
  href,
  children,
  className = "",
  onClick,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
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
