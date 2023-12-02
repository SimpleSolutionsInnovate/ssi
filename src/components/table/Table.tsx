import { FC, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import TableRow from "./TableRow";

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

const onRowMenuClick = (clickedRow: Record<string, any>) => {
  console.log(clickedRow);
};

const Table: FC<TableProps> = ({
  data,
  columns,
  onRowClick,
  select,
  menu,
  menuOption,
  onRowMenuOptionClick,
  styles,
  onRowSelect,
}) => {
  const [sorting, setSorting] = useState<{ [key: string]: "asc" | "desc" }>({});
  const [allChecked, setAllChecked] = useState(false);
  const [rowCheckboxes, setRowCheckboxes] = useState<boolean[]>([]);
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[]>([]);

  const handleHeaderClick = (column: Column) => {
    if (column.sort) {
      const sortOrder = sorting[column.accessor] === "asc" ? "desc" : "asc";
      setSorting({ ...sorting, [column.accessor]: sortOrder });
    }
  };

  const sortedData = data?.slice().sort((a, b) => {
    if (columns) {
      const sortColumn = columns.find((col) => col.accessor in sorting);
      if (sortColumn && sortColumn.accessor in sorting) {
        const sortOrder = sorting[sortColumn.accessor] === "asc" ? 1 : -1;
        const valueA = a[sortColumn.accessor];
        const valueB = b[sortColumn.accessor];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return sortOrder * valueA.localeCompare(valueB);
        }

        return sortOrder * (valueA - valueB);
      }
    }
    return 0;
  });

  const handleHeaderCheckboxChange = (checked: boolean) => {
    if (checked) {
      const allRows = sortedData ?? [];
      setSelectedRows(allRows);
      onRowSelect?.(allRows);
    } else {
      setSelectedRows([]);
      onRowSelect?.([]);
    }

    setAllChecked(checked);
    const updatedCheckboxes = Array(data?.length || 0).fill(checked);
    setRowCheckboxes(updatedCheckboxes);
  };

  const handleRowCheckboxChange = (index: number, checked: boolean) => {
    const updatedRows = [...selectedRows];
    const selectedRow = sortedData?.[index];

    if (selectedRow) {
      if (checked) {
        updatedRows.push(selectedRow);
      } else {
        const indexes = updatedRows.findIndex(
          (row) => row.id === selectedRow.id
        );
        if (indexes !== -1) {
          updatedRows.splice(indexes, 1);
        }
      }
      setSelectedRows(updatedRows);
      onRowSelect?.(updatedRows);
    }

    const updatedCheckboxes = [...rowCheckboxes];
    updatedCheckboxes[index] = checked;
    setRowCheckboxes(updatedCheckboxes);
    setAllChecked(updatedCheckboxes.every((checkbox) => checkbox));
  };

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-separate border-spacing-y-2'>
        <thead className='bg-[#eef1f5]'>
          <tr>
            {select && (
              <th className='rounded-l-md pl-2'>
                <input
                  type='checkbox'
                  name=''
                  id=''
                  checked={allChecked}
                  onChange={(e) => handleHeaderCheckboxChange(e.target.checked)}
                />
              </th>
            )}
            {columns?.map((column, index) => (
              <th
                key={index}
                onClick={() => handleHeaderClick(column)}
                className={`${
                  column.sort ? "cursor-pointer" : ""
                } px-6 py-3 text-left text-xs font-medium text-blue-ribbon-500 tracking-wider`}
              >
                {column.header}
                {column.sort && sorting[column.accessor] && (
                  <span>
                    {sorting[column.accessor] === "asc" ? " ▲" : " ▼"}
                  </span>
                )}
              </th>
            ))}
            {menu && (
              <th className='rounded-r-md'>
                <CiMenuKebab className='opacity-0' />
              </th>
            )}
          </tr>
        </thead>
        <tbody className=''>
          {sortedData?.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              columns={columns}
              onRowClick={onRowClick}
              onRowMenuClick={onRowMenuClick}
              select={select}
              menu={menu}
              menuOption={menuOption}
              data={data}
              onRowMenuOptionClick={onRowMenuOptionClick}
              bg_color={styles?.bg_color}
              text_color={styles?.text_color}
              menu_bg_color={styles?.menu_bg_color}
              isChecked={rowCheckboxes[rowIndex] || false}
              onCheckboxChange={(index, checked) =>
                handleRowCheckboxChange(index, checked)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
