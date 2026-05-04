import Link from 'next/link';

export default function ProgramCard({
  title,
  backgroundImage,
  href,
  buttonText,
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-cover bg-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(to top, rgba(30, 30, 30, 0.7), rgba(255, 216, 159, 0.35))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-10 text-center">
        <h3
          className="font-semibold uppercase text-white"
          style={{ fontSize: '33px', letterSpacing: '2px' }}
        >
          {title}
        </h3>

        {buttonText && (
          <span className="inline-block rounded-md bg-cream px-6 py-2.5 text-sm font-semibold uppercase tracking-[2px] text-[#808080] shadow transition-shadow duration-200 group-hover:shadow-md">
            {buttonText}
          </span>
        )}
      </div>
    </Link>
  );
}
