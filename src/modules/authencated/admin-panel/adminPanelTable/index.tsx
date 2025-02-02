import { ColumnDef } from "@tanstack/react-table";
import CustomTable from "components/table";
import icons from "constants/icons";
import React from "react";

interface RowData {
  id: string;
  name: string;
  role: string;
  signUps: string;
  imgUrl: string;
}

const initialData: RowData[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Lorem ipsum",
    signUps: "2",
    imgUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Dolor sit amet",
    signUps: "5",
    imgUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "3",
    name: "Alice Johnson",
    role: "Consectetur adipiscing",
    signUps: "3",
    imgUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "4",
    name: "Robert Brown",
    role: "Sed do eiusmod",
    signUps: "8",
    imgUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "5",
    name: "Emily Davis",
    role: "Tempor incididunt",
    signUps: "6",
    imgUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "6",
    name: "Michael Wilson",
    role: "Ut labore et dolore",
    signUps: "4",
    imgUrl: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "7",
    name: "Sophia Martinez",
    role: "Magna aliqua",
    signUps: "7",
    imgUrl: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "8",
    name: "William Anderson",
    role: "Ut enim ad minim",
    signUps: "9",
    imgUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "9",
    name: "Olivia Thomas",
    role: "Exercitation ullamco",
    signUps: "5",
    imgUrl: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "10",
    name: "James Taylor",
    role: "Laboris nisi ut aliquip",
    signUps: "11",
    imgUrl: "https://i.pravatar.cc/150?img=11",
  },
];

const AdminPanelTable = () => {
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
      accessorKey: "",
      id: "number",
      header: () => <h1 className="font-semibold">Admin</h1>,
      cell: (info) => {
        const id = info.row.original.id;
        const imgUrl = info.row.original.imgUrl;
        const name = info.row.original.name;

        return (
          <div className="flex gap-3 items-center">
            <img src={imgUrl} alt={id} className="w-11 h-11 rounded-full" />
            <h1 className="font-semibold">{name}</h1>
          </div>
        );
      },
    },
    {
      accessorKey: "id",
      header: () => <h1 className="font-semibold">Role</h1>,
      cell: (info) => {
        const role = info.row.original.role;
        return <h1 className="font-semibold">{role}</h1>;
      },
    },
    {
      accessorKey: "dateAdded",
      header: () => <h1 className="font-semibold text-center">Sign-ups</h1>,
      cell: (info) => {
        return (
          <h1 className="font-semibold text-center">
            {info.row.original.signUps}
          </h1>
        );
      },
    },

    {
      accessorKey: "action",
      header: () => <h1 className="font-semibold text-center">Action</h1>,
      cell: (info) => {
        return (
          <div className="flex justify-center items-center">
            <img src={icons.more} alt="" width="3" className="cursor-pointer" />
          </div>
        );
      },
    },
  ];

  return <CustomTable columns={columns} initialData={initialData} />;
};

export default AdminPanelTable;
