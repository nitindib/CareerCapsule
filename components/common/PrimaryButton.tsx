import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function PrimaryButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
    >
      {children}
    </Link>
  );
}