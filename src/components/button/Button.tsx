import React from "react";

interface ButtonProps {
  label: string;
  btn_color?: string;
  btn_text_color?: string;
  btn_text_size?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`border px-6 py-2 rounded-md ${props.btn_color} ${props.btn_text_color} ${props.btn_text_size}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
