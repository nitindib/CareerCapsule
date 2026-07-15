type Props = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">

      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-3 text-slate-600">
        {subtitle}
      </p>

    </div>
  );
}