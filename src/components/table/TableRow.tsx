import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

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

const TableRow: React.FC<TableRowProps> = ({
  rowIndex,
  row,
  columns,
  select,
  menu,
  onRowClick,
  onRowMenuClick,
  data,
  menuOption,
  onRowMenuOptionClick,
  bg_color,
  text_color,
  menu_bg_color,
  isChecked,
  onCheckboxChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    onRowClick(row);
  };

  const clickMenu = (menuOptionEach: Record<string, any>) => {
    onRowMenuOptionClick?.(menuOptionEach);
  };

  useEffect(() => {
    if (isChecked) {
      // Logic to check the row
    } else {
      // Logic to uncheck the row
    }
  }, [isChecked]);

  return (
    <tr
      key={rowIndex}
      onClick={handleClick}
      className={`hover:${bg_color}/50 ${
        bg_color ?? "bg-white"
      } ${text_color} transition-all ease-in-out duration-100 cursor-pointer relative`}
    >
      {select && (
        <th className='rounded-l-md pl-2'>
          <input
            type='checkbox'
            name=''
            id=''
            checked={isChecked}
            onChange={(e) => onCheckboxChange(rowIndex, e.target.checked)}
          />
        </th>
      )}
      {columns?.map((column, colIndex) => (
        <td
          key={colIndex}
          className={`px-6 py-4 whitespace-nowrap text-sm text-start`}
        >
          <span>{row[column.accessor]}</span>
        </td>
      ))}
      {menu && (
        <td className='rounded-r-md' onClick={() => setOpen(!open)}>
          <CiMenuKebab />
        </td>
      )}
      {open && data && (
        <div
          className={`${
            rowIndex === data.length - 1 ||
            rowIndex === data.length - 2 ||
            rowIndex === data.length - 3
              ? "-top-20 "
              : "top-10"
          } text-start rounded-md ${menu_bg_color} absolute right-10 z-50 shadow-md`}
        >
          <ul>
            {menuOption?.map((each, index) => {
              return (
                <li
                  key={index}
                  className={`${menu_bg_color} px-6 py-2 hover:bg-gray-200 cursor-pointer`}
                  onClick={() => clickMenu(each)}
                >
                  {each.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </tr>
  );
};

export default TableRow;
