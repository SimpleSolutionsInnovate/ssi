interface Column {
    header: string;
    accessor: string;
    sort?: boolean;
}
interface TableProps {
    data: Record<string, any>[] | null;
    columns: Column[] | null;
}
declare function TableWidget({ data, columns }: TableProps): import("react/jsx-runtime").JSX.Element;
export default TableWidget;
