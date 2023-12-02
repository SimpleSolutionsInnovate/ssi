import React, { FC, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    label: string;
    btn_color?: string;
    btn_text_color?: string;
    btn_text_size?: string;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

interface Column {
    header: string;
    accessor: string;
    sort?: boolean;
}
interface Styles {
    bg_color?: string;
    text_color?: string;
    menu_bg_color?: string;
    border?: boolean;
}
interface TableProps {
    data: Record<string, any>[] | null;
    columns: Column[] | null;
    styles?: Styles;
    onRowClick: (rowData: Record<string, any>) => void;
    select?: boolean;
    menu?: boolean;
    menuOption?: Record<string, any>[] | null;
    onRowMenuOptionClick?: (row: Record<string, any>) => void;
    onRowSelect?: (selectedRows: Record<string, any>[]) => void;
}
declare const Table: FC<TableProps>;

interface SideBarProps {
    sideItem: Record<string, any>[] | null;
    app_logo?: string;
    app_display_name?: string;
    children?: ReactNode;
}
declare const Sidebar: ({ sideItem, app_logo, app_display_name, children, }: SideBarProps) => react_jsx_runtime.JSX.Element;

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

export { Button, Navbar as NavBar, Sidebar as SideBar, Table };
