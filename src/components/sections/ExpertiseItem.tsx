type Props = {
  title: string
  desc: string
}

export function ExpertiseItem({ title, desc }: Props) {
  return (
    <div className="w-[300px] flex flex-col justify-between h-75 pl-5 my-10 shrink-0 border-l border-white">
      <h3 className="text-3xl font-light">
        {title}
      </h3>
      <p className=" text-white/80 leading-relaxed text-lg">
        {desc}
      </p>
    </div>
  )
}
