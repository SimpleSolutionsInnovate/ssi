import { ReactNode } from "react";
interface SideBarProps {
    sideItem: Record<string, any>[] | null;
    app_logo?: string;
    app_display_name?: string;
    children?: ReactNode;
}
declare const Sidebar: ({ sideItem, app_logo, app_display_name, children, }: SideBarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
