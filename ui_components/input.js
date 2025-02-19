export function Input({ placeholder, value, onChange, className }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded p-2 w-full ${className}`}
    />
  );
}