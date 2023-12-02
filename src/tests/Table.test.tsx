import { render } from "@testing-library/react";
import { Table } from "../components";

export {};

test("renders learn react link", () => {
  render(
    <Table
      columns={columns}
      data={data}
      menuOption={menuOption}
      styles={{
        bg_color: "bg-green-100",
        text_color: "",
        menu_bg_color: "",
        border: true,
      }}
      onRowClick={handleClick}
    />
  );
});

const columns = [
  { header: "Stage", accessor: "stage_id", sort: true },
  { header: "Task", accessor: "title", sort: true },
  { header: "Track", accessor: "track_id" },
  { header: "Due Date", accessor: "due_date" },
  { header: "Status", accessor: "status" },
  { header: "Points", accessor: "points" },
];

const data = [
  {
    stage_id: 10,
    title: "Task",
    track_id: "10",
    due_date: "26/17/2202",
    status: "Completed",
    points: "10",
  },
  {
    stage_id: 4,
    title: "LMS",
    track_id: "4",
    due_date: "26/17/2202",
    status: "Completed",
    points: "100",
  },
  {
    stage_id: 5,
    title: "LMS",
    track_id: "4",
    due_date: "26/17/2202",
    status: "Completed",
    points: "100",
  },
  {
    stage_id: 6,
    title: "LMS",
    track_id: "4",
    due_date: "26/17/2202",
    status: "Completed",
    points: "100",
  },
];

const menuOption = [
  {
    title: "Edit",
    key: "edit",
    id: 0,
  },
  {
    title: "Delete",
    key: "delete",
    id: 1,
  },
];

const handleClick = (data: any) => {
  // console.log(data);
};

const onRowMenuOptionClick = (option: any) => {
  console.log(option);
};

const handleRowSelection = (selectedRows: Record<string, any>[]) => {
  console.log("Selected Rows:", selectedRows);
};
