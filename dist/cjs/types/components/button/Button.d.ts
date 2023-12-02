import React from "react";
interface ButtonProps {
    label: string;
    btn_color?: string;
    btn_text_color?: string;
    btn_text_size?: string;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
