export default function Divider({
  color = '#ffa40d',
  width = '70px',
  weight = '3px',
  centered = false,
}) {
  return (
    <hr
      className={centered ? 'mx-auto' : ''}
      style={{
        width,
        height: weight,
        backgroundColor: color,
        border: 'none',
        borderRadius: weight,
      }}
    />
  );
}
