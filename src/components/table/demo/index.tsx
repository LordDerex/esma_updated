import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import CustomTable from "..";
import icons from "constants/icons";

interface RowData {
  id: string;
  name: string;
  email: string;
  role: string;
  imgUrl: string;
}

export default function DemoTable() {
  const [accessPointId, setAccessPointId] = React.useState<string | null>(null);

  const columns: ColumnDef<RowData>[] = [
    {
      accessorKey: "",
      id: "select",
      header: () => (
        <span className="text-xs font-medium tracking-[-0.06px] text-[#344054] w-[10%]">
          <input type="checkbox" className="h-[20px] w-[20px]" />
        </span>
      ),
      cell: (info) => {
        const id = info.row.original.id;

        return (
          <span className="w-[10%]">
            <input
              type="checkbox"
              checked={accessPointId === id}
              className="h-[20px] w-[20px]"
            />
          </span>
        );
      },
    },
    {
      accessorKey: "name",
      header: () => (
        <span className="text-xs font-medium tracking-[-0.06px] text-[#344054] w-[35%]">
          Name
        </span>
      ),
      cell: (info) => {
        const imgUrl = info.row.original.imgUrl;

        return (
          <span className="text-sm text-[#344054] flex gap-2 items-center">
            <img src={imgUrl} alt="" className="h-10 w-10 rounded-full" />{" "}
            {info.getValue() as string}
          </span>
        );
      },
    },
    {
      accessorKey: "email",
      header: () => (
        <span className="text-xs font-medium tracking-[-0.06px] text-[#344054] w-[45%]">
          Email
        </span>
      ),
      cell: (info) => {
        return (
          <span className="text-sm text-[#344054]">
            {info.getValue() as string}
          </span>
        );
      },
    },
    {
      accessorKey: "role",
      header: () => (
        <span className="text-xs font-medium tracking-[-0.06px] text-[#344054] W-[10%]">
          Role
        </span>
      ),
      cell: (info) => {
        return (
          <span className="text-sm text-[#344054]">
            {info.getValue() as string}
          </span>
        );
      },
    },
    {
      accessorKey: "action",
      header: () => (
        <span className="text-xs font-medium tracking-[-0.06px] text-[#344054] w-[10%]">
          Action
        </span>
      ),
      cell: (info) => {
        return (
          <span className="text-sm text-[#344054]">
            {/* <img src={icons.more} alt="" /> */}
          </span>
        );
      },
    },
  ];

  const initialData: RowData[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      imgUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
      imgUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "Admin",
      imgUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice.brown@example.com",
      role: "User",
      imgUrl: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return <CustomTable columns={columns} initialData={initialData} />;
}
