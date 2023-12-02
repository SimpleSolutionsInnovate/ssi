import React, { ReactNode } from "react";
import Button from "../button";

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

const Navbar: React.FC<NavbarProps> = ({
  children,
  bgColor = "bg-gray-800",
  textColor = "text-white",
  className = "",
  nav_logo = "Logo",
  button = false,
  btn_label = "button",
  btn_color = "bg-blue-100",
  btn_text_color = "text-blue-900",
  nav_item_position = "mx-auto",
  navItems = [],
}) => {
  const navbarClasses = `flex justify-between items-center px-4 py-3 ${bgColor} ${textColor} ${className}`;

  return (
    <nav className={navbarClasses}>
      <div className='flex items-center'>
        {/* You can add your custom branding/logo or other elements here */}
        <span className='text-xl font-bold'>
          {nav_logo ? (
            <img src={nav_logo} alt='' className='w-10 h-auto' />
          ) : (
            "Logo"
          )}
        </span>
      </div>
      <div className={`${nav_item_position} flex items-center px-5`}>
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className='mx-4'>
            {item.label}
          </a>
        ))}
        {children}
      </div>
      {button && (
        <Button
          label={btn_label}
          btn_color={btn_color}
          btn_text_color={btn_text_color}
        />
      )}
    </nav>
  );
};

export default Navbar;
