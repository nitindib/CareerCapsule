type Props = {
  label: string;
  value: React.ReactNode;
};

export default function Field({
  label,
  value,
}: Props) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">

      <p className="text-sm text-slate-500">
        {label}
      </p>

      <div className="mt-1 break-words font-semibold">
        {value || "-"}
      </div>

    </div>
  );
}