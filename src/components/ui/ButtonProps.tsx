import { IButton } from "@/interfaces/button.interface";
import React from "react";

const Button = ({
  label,
 
  className,
  disabled,
  type = "button",
  icon,
  iconPosition = "left",
  style,
  onclick
}: IButton) => {
  return (
    <button
      
      className={`inline-flex items-center ${className}`}
      onClick={onclick} // 👈 flex for icon + text layout
      disabled={disabled}
      type={type}
      style={style}
    >
      {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
      {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
