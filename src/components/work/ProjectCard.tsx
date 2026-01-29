import Image from "next/image"
import Link from "next/link"

type Props = {
  title: string
  client: string
  image: string
  href: string
}

export default function ProjectCard({ title, client, image, href }: Props) {
  return (
    <Link href={href} className="group">
      <div>
        <div className="relative aspect-[4/3] overflow-hidden mb-6">
          <img
            src={image}
            alt={client}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <h3 className="text-lg font-light mb-1">
          {title}
        </h3>
        <p className="text-white/60 text-sm">
          {client}
        </p>
      </div>
    </Link>
  )
}
