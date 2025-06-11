import React from "react";

function Button({ children, className = "", type = "submit", href, ...props }) {
  return (
    <div>
      {href ? (
        <a href={href} target="_blank">
          <button
            className={`"bg-blue-500 flex items-center bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-700 cursor-pointer ${className}`}
            type={type}
            {...props}
          >
            {children}
          </button>
        </a>
      ) : (
        <button
          className={`"bg-blue-500 flex items-center bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-700 cursor-pointer ${className}`}
          type={type}
          {...props}
        >
          {children}
        </button>
      )}
    </div>
  );
}

export default Button;
