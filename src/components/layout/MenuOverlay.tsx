import Link from "next/link"
import { ComponentProps } from "react"

type TextLinkProps = ComponentProps<typeof Link>

export default function TextLink({ href, children, ...props }: TextLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className="relative inline-block text-white"
    >
      {children}
    </Link>
  )
}
