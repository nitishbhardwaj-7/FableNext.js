export default function VideoSection() {
  return (
    <section className="w-full overflow-hidden">
      <video
        className="w-full h-auto object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cms.fableco.uk/wp-content/uploads/2025/09/Fable-Drone00000480-1-opt.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  )
}
