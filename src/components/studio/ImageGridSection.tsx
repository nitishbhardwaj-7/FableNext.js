const images = [
  "https://cms.fableco.uk/wp-content/uploads/2025/07/image-grid-1.jpg",
  "https://cms.fableco.uk/wp-content/uploads/2025/07/3.jpg",
]

export default function ImageGridSection() {
  return (
    <section className="mx-10 py-32 flex gap-10 border-b border-white m-w-screen overflow-x-hidden">
        <img src="https://cms.fableco.uk/wp-content/uploads/2025/07/image-grid-1.jpg"
          className="w-150 h-full object-contain"
        />
        <img className="w-327 h-full object-contain" src="https://cms.fableco.uk/wp-content/uploads/2025/07/3.jpg" alt="" />
    </section>
  )
}
