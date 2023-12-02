Table component.

The component requires a column data, a data for the row and a click function

column data should come in this format

const columns = [
{ header: "Stage", accessor: "stage_id" },
{ header: "Task", accessor: "title" },
{ header: "Track", accessor: "track_id" },
{ header: "Due Date", accessor: "due_date" },
{ header: "Status", accessor: "status" },
{ header: "Points", accessor: "points" },
];

header is the display text for the table header while accessor is the key to access the data that belongs to the header. The access is gotten from the keys of the data. See below for clearance

data should have the following structure.

const data = [
{
stage_id: "10",
title: "Task",
track_id: "10",
due_date: "26/17/2202",
status: "Completed",
points: "10",
},
{
stage_id: "4",
title: "LMS",
track_id: "4",
due_date: "26/17/2202",
status: "Completed",
points: "100",
},
];

Note, this keys and value can be decided and be changed however you want
