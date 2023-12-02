import React from "react";
interface Column {
    header: string;
    accessor: string;
}
interface TableRowProps {
    rowIndex: number;
    row: Record<string, any>;
    columns: Column[] | null;
    data: Record<string, any>[] | null;
    select?: boolean;
    menu?: boolean;
    onRowClick: (row: Record<string, any>) => void;
    onRowMenuClick?: (row: Record<string, any>) => void;
    menuOption?: Record<string, any>[] | null;
    onRowMenuOptionClick?: (row: Record<string, any>) => void;
    text_color?: string;
    bg_color?: string;
    menu_bg_color?: string;
    isChecked: boolean;
    onCheckboxChange: (rowIndex: number, checked: boolean) => void;
}
declare const TableRow: React.FC<TableRowProps>;
export default TableRow;
