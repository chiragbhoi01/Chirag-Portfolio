import type { ChangeEvent } from 'react';

type InputField = {
  className?: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
  required?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const Input = ({ className, type, placeholder, id, name, required, rows, value, onChange }: InputField) => {
  const baseClasses =
    'w-full p-3 rounded-lg bg-white/10 text-white border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300';

  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows || 5}
        value={value}
        onChange={onChange}
        className={`${baseClasses} ${className || ''}`}
        aria-required={required ? 'true' : 'false'}
      />
    );
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${className || ''}`}
      aria-required={required ? 'true' : 'false'}
    />
  );
};

export default Input;