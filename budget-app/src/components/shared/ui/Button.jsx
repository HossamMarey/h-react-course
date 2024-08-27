import React from "react";

const Button = ({ children, className, type = "primary", ...props }) => {
  return (
    <button
      className={`${className} 
    ${type === "primary" ? "bg-primary" : ""}
    ${type === "income" ? "bg-income" : ""}
    ${type === "expanse" ? "bg-expanse" : ""}
    
    p-2 rounded-md shadow hover:opacity-70 hover:scale-105 transition-all duration-300
     `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
