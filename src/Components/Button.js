
import React from 'react';

const Button = ({ onClick, className, children, label }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`text-white bg-gray-900 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
            aria-label={label}
        >
            {label || children}
        </button>
    );
};
export default Button;
