type TextareaProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
};

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
  required = false,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-semibold text-slate-700">
          {label}
        </label>
      )}

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none transition resize-y focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}