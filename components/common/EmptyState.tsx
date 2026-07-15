type Props = {
  title: string;
  subtitle: string;
};

export default function EmptyState({
  title,
  subtitle,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-12 text-center shadow">

      <div className="text-6xl">
        📋
      </div>

      <h2 className="mt-6 text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-600">
        {subtitle}
      </p>

    </div>
  );
}