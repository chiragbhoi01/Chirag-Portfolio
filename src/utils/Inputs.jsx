import { forwardRef } from "react";

const Inputs = forwardRef(
  ({ label, type = "text", placeholder, className = "", as = "input", value, onChange, ...props }, ref) => {
    const Component = as === "textarea" ? "textarea" : "input";

    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={label}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <Component
          ref={ref}
          type={type}
          id={label} // Ensure id is unique (you can also replace this with `id={label.replace(' ', '-')}`)
          placeholder={placeholder}
          value={value} // Bind value here
          onChange={onChange} // Bind onChange here
          className={`border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm ${className}`}
          {...props}
        />
      </div>
    );
  }
);

export default Inputs;
