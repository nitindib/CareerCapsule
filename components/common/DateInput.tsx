type DateInputProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function DateInput({
  label,
  value,
  onChange,
  required = false,
}: DateInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-semibold text-slate-700">
          {label}
        </label>
      )}

      <input
        type="date"
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}