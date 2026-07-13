type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
};

export default function Select({
  label,
  value,
  onChange,
  options,
  required = false,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-semibold text-slate-700">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}