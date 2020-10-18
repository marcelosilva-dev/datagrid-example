import React from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
  { key: "title2", name: "Title2" },
  { key: "title3", name: "Title3" },
  { key: "title4", name: "Title4" },
];

const rows = [
  { id: 0, title: "Example", title2: "ex", title3: "ex", title4: "ex" },
  { id: 1, title: "Example", title2: "ex", title3: "ex", title4: "ex" },
  { id: 2, title: "Example", title2: "ex", title3: "ex", title4: "ex" },
  { id: 3, title: "Example", title2: "ex", title3: "ex", title4: "ex" },
  { id: 4, title: "Example", title2: "ex", title3: "ex", title4: "ex" },
];
export default function Datagrid() {
  return <DataGrid columns={columns} rows={rows} />;
}
