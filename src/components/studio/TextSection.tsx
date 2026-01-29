type Props = {
  title: string
  excerpt: string
  content: string
}

export default function TextSection({ title, excerpt, content }: Props) {
  return (
    <section className="px-10">
        <div className="flex">
            <h2 className="text-lg w-135 uppercase">{title}</h2>
      <p className="text-2xl opacity-80 w-250">{excerpt}
        <p className="text-xl opacity-70 leading-relaxed mt-20">{content}</p>
      </p>
        </div>
    </section>
  )
}
