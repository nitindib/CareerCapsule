type Props = {
  href?: string | null;
  text?: string;
};

export default function LinkButton({
  href,
  text = "Open Link",
}: Props) {
  if (!href) {
    return (
      <span className="text-slate-400">
        -
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
    >
      🔗 {text}
    </a>
  );
}