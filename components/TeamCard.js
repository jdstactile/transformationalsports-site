export default function TeamCard({ name, role, bio, imageUrl }) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div
        className="rounded-t-[20px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          minHeight: '400px',
        }}
      />

      {/* Text card (overlapping image) */}
      <div
        className="-mt-[93px] rounded-b-[20px] bg-cream px-6 pb-6 pt-8"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h3 className="text-lg font-semibold text-near-black">{name}</h3>
        <p
          className="mt-1 text-sm font-bold uppercase text-[#bfbfbf]"
          style={{ letterSpacing: '1px' }}
        >
          {role}
        </p>
        {bio && (
          <p className="mt-3 text-base leading-relaxed text-[#808080]">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
}
