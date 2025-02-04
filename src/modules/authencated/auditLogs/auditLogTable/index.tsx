import { ColumnDef } from "@tanstack/react-table";
import CustomTable from "components/table";
import React from "react";
import { RowDataForAuditLog } from "types";
import { AuditLogData } from "Utils/DummyData";

const AuditLogTable = () => {
  const columns: ColumnDef<RowDataForAuditLog>[] = [
    {
      accessorKey: "date_and_time",
      header: () => <h1 className="font-semibold">Date & Time</h1>,
      cell: (info) => {
        return <span className="text-sm">{info.getValue() as string}</span>;
      },
    },
    {
      accessorKey: "user",
      header: () => <h1 className="font-semibold">User</h1>,
      cell: (info) => {
        const imgUrl = info.row.original.imgUrl;
        const name = info.row.original.user;

        return (
          <div className="flex gap-3 items-center">
            <img src={imgUrl} alt="Img" className="w-11 h-11 rounded-full" />
            <h1 className="font-semibold">{name}</h1>
          </div>
        );
      },
    },
    {
      accessorKey: "role",
      header: () => <h1 className="font-semibold text-center">Role</h1>,
      cell: (info) => {
        const role = info.getValue() as string;

        return <p className="text-sm text-center">{role}</p>;
      },
    },

    {
      accessorKey: "action",
      header: () => <h1 className="font-semibold text-center">Action</h1>,
      cell: (info) => {
        const action = info.getValue() as string;

        return <p className="text-sm text-center">{action}</p>;
      },
    },
  ];

  return <CustomTable columns={columns} initialData={AuditLogData} />;
};

export default AuditLogTable;
