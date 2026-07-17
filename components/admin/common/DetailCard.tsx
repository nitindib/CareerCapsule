type Props = {
  title: string;
  children: React.ReactNode;
};

export default function DetailCard({
  title,
  children,
}: Props) {
  return (
    <div className="mb-8 rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="mb-6 border-b pb-3 text-2xl font-bold">
        {title}
      </h2>

      {children}

    </div>
  );
}