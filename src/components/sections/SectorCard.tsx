"use client"
type Props = {
  title: string
  secondtitle: string
  video: string
  description: string
}

export function SectorCard({ title, secondtitle, video, description }: Props) {
  return (
    <a
      href="#"
      className="w-[85vw] sm:w-[70vw] md:w-170 shrink-0 group"
    >
      <figure className="relative aspect-video overflow-hidden">
        <video
          src={video}
          muted
          loop
          playsInline
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
        />
      </figure>

      <h3 className="mt-6 md:mt-12 text-xl sm:text-2xl md:text-3xl font-light leading-tight text-white">
        {title}
      </h3>
      <h3 className="md:mt-12 text-xl sm:text-2xl md:text-3xl font-light leading-tight text-white">
        {secondtitle}
      </h3>

      <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/80">
        {description}
      </p>
    </a>
  )
}
