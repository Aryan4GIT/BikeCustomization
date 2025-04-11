// src/components/ui/button.tsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
