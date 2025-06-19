import { forwardRef } from "react";

const Inputs = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      className = "",
      as = "input",
      id,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const Component = as === "textarea" ? "textarea" : "input";

    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={id}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <Component
          ref={ref}
          type={type}
          id={id} // Use passed id for uniqueness
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
