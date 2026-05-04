export default function Hero({
  title,
  backgroundImage = 'https://transformationalsports.org/wp-content/uploads/2021/03/IMG_3794-1.jpg',
}) {
  return (
    <section
      className="parallax-bg hero-zoom relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: '6%',
        paddingBottom: '6%',
        minHeight: '340px',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 178, 62, 0.6), rgba(83, 75, 56, 0.55))',
        }}
      />

      {/* Title */}
      <h1
        className="relative z-10 px-6 text-center font-light text-white"
        style={{
          fontSize: 'clamp(2.25rem, 6vw, 69px)',
          letterSpacing: '-4px',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h1>
    </section>
  );
}
