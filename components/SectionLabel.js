export default function SectionLabel({ text, light = false, centered = true }) {
  return (
    <p
      className={`text-sm font-bold uppercase ${
        centered ? 'text-center' : 'text-left'
      } ${light ? 'text-white/60' : 'text-[#bfbfbf]'}`}
      style={{ letterSpacing: '2px', fontSize: '13px' }}
    >
      {text}
    </p>
  );
}
