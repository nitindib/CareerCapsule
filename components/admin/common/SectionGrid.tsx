type Props = {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
};

export default function SectionGrid({
  children,
  cols = 3,
}: Props) {
  const gridClass =
    cols === 2
      ? "grid gap-5 md:grid-cols-2"
      : cols === 4
      ? "grid gap-5 md:grid-cols-2 lg:grid-cols-4"
      : "grid gap-5 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
}