type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
      />

      <span className="text-slate-700 font-medium">
        {label}
      </span>
    </label>
  );
}