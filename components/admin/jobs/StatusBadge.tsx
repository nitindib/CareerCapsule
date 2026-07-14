type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  let bg = "bg-slate-100 text-slate-700";
  let dot = "bg-slate-500";

  switch (status?.toLowerCase()) {
    case "published":
      bg = "bg-green-100 text-green-700";
      dot = "bg-green-500";
      break;

    case "draft":
      bg = "bg-yellow-100 text-yellow-700";
      dot = "bg-yellow-500";
      break;

    case "closed":
      bg = "bg-red-100 text-red-700";
      dot = "bg-red-500";
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${bg}`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`}></span>
      {status}
    </span>
  );
}