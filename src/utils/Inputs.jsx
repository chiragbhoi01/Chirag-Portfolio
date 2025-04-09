import { forwardRef } from "react";

const Input = forwardRef(({label, type = "text", placeholder, className = "", ...porps}) => {
    return (
        <div>
            label && <label htmlFor={label}> {label}</label>
            <input type="text" placeholder={placeholder} className={className} {...porps} />
        </div>
    )
},ref);
export default Input