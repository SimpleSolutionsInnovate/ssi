import React, { ReactNode } from "react";
type NavItem = {
    label: string;
    link: string;
};
type NavbarProps = {
    children?: ReactNode;
    bgColor?: string;
    textColor?: string;
    className?: string;
    nav_logo?: string;
    button?: boolean;
    btn_label?: string;
    btn_color?: string;
    btn_text_color?: string;
    nav_item_position?: string;
    navItems?: NavItem[];
};
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
