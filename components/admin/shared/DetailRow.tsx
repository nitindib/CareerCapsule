type Props = {
  label: string;
  value: any;
};

export default function DetailRow({
  label,
  value,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </h3>

      <p className="text-lg text-slate-800 break-words">
        {value || "-"}
      </p>
    </div>
  );
}