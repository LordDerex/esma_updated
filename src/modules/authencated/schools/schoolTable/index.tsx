import { ColumnDef } from "@tanstack/react-table";
import CustomTable from "components/table";
import icons from "constants/icons";
import React from "react";

interface RowData {
  id: string;
  name: string;
  email: string;
  imgUrl: string;
  dateAdded: string;
  subscription: "Premium" | "Standard" | "Customized";
  admin: string;
}

const initialData: RowData[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=1",
    dateAdded: "9th June, 2024",
    subscription: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=2",
    dateAdded: "8th June, 2024",
    subscription: "Standard",
    admin: "Samson Edeh",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=3",
    dateAdded: "7th June, 2024",
    subscription: "Customized",
    admin: "Samson Edeh",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=4",
    dateAdded: "6th June, 2024",
    subscription: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "5",
    name: "Charlie White",
    email: "charlie.white@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=5",
    dateAdded: "5th June, 2024",
    subscription: "Standard",
    admin: "Samson Edeh",
  },
  {
    id: "6",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=6",
    dateAdded: "4th June, 2024",
    subscription: "Customized",
    admin: "Samson Edeh",
  },
  {
    id: "7",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=7",
    dateAdded: "3rd June, 2024",
    subscription: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "8",
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=8",
    dateAdded: "2nd June, 2024",
    subscription: "Standard",
    admin: "Samson Edeh",
  },
  {
    id: "9",
    name: "James Anderson",
    email: "james.anderson@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=9",
    dateAdded: "1st June, 2024",
    subscription: "Customized",
    admin: "Samson Edeh",
  },
  {
    id: "10",
    name: "Olivia Thompson",
    email: "olivia.thompson@example.com",
    imgUrl: "https://i.pravatar.cc/150?img=10",
    dateAdded: "31st May, 2024",
    subscription: "Premium",
    admin: "Samson Edeh",
  },
];

const SchoolTable = () => {
  const columns: ColumnDef<RowData>[] = [
    {
      accessorKey: "",
      id: "number",
      header: () => <h1 className="font-semibold">School name</h1>,
      cell: (info) => {
        const id = info.row.original.id;
        const imgUrl = info.row.original.imgUrl;
        const name = info.row.original.name;

        return (
          <div className="flex gap-3 items-center">
            <h1 className="font-semibold ">{id}.</h1>
            <img src={imgUrl} alt={id} className="w-11 h-11 rounded-full" />
            <h1 className="font-semibold">{name}</h1>
          </div>
        );
      },
    },
    {
      accessorKey: "id",
      header: () => <h1 className="font-semibold">School Admin</h1>,
      cell: (info) => {
        const imgUrl = info.row.original.imgUrl;
        const name = info.row.original.name;
        const email = info.row.original.email;

        return (
          <div className="flex gap-2">
            <img src={imgUrl} alt={name} className="w-11 h-11 rounded-full" />
            <div>
              <h1 className="font-semibold">{name}</h1>
              <p className="text-sm text-[#888888]">{email}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "dateAdded",
      header: () => <h1 className="font-semibold">Date added</h1>,
      cell: (info) => {
        return <span className="text-sm">{info.getValue() as string}</span>;
      },
    },
    {
      accessorKey: "subscription",
      header: () => <h1 className="font-semibold text-center">Subscription</h1>,
      cell: (info) => {
        const subscriptionType = info.getValue() as string;
        console.log(subscriptionType);
        let style;
        switch (subscriptionType) {
          case "Premium":
            style = "bg-[#75FF75] text-[#007700]";
            break;
          case "Standard":
            style = "bg-[#FFDD67] text-[#EBA352]";
            break;
          case "Customized":
            style = "bg-[#BEBEFF] text-[#0000FF]";
            break;
          default:
            style = "bg-[#FFDD67] text-[#EBA352]";
            break;
        }

        return (
          <div className="flex justify-center items-center h-full">
            <span className={`text-sm px-5 py-1 rounded ${style}`}>
              {subscriptionType}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "admin",
      header: () => <h1 className="font-semibold text-center">Admin</h1>,
      cell: (info) => {
        const admin = info.getValue() as string;

        return <p className="text-sm text-center">{admin}</p>;
      },
    },
    {
      accessorKey: "action",
      header: () => "",
      cell: (info) => {
        return (
          <img src={icons.more} alt="" width="3" className="cursor-pointer" />
        );
      },
    },
  ];

  return <CustomTable columns={columns} initialData={initialData} />;
};

export default SchoolTable;
