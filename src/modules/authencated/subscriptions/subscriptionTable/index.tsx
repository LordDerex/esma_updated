import { ColumnDef } from "@tanstack/react-table";
import CustomTable from "components/table";
import icons from "constants/icons";
import React from "react";

interface RowData {
  id: string;
  name: string;
  imgUrl: string;
  amount: string;
  purchaseDate: string;
  expiration: "Premium" | "Standard" | "Customized";
  subscription: "Premium" | "Standard" | "Customized";
  admin: string;
}

const subscriptionInitialData: RowData[] = [
  {
    id: "1",
    name: "John Doe",
    imgUrl: "https://i.pravatar.cc/150?img=1",
    purchaseDate: "9th June, 2024",
    amount: "N50,000",
    expiration: "Premium",
    admin: "Samson Edeh",
    subscription: "Premium",
  },
  {
    id: "2",
    name: "Jane Smith",
    imgUrl: "https://i.pravatar.cc/150?img=2",

    subscription: "Standard",
    purchaseDate: "9th June, 2024",
    amount: "N39,500",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "3",
    name: "Bob Johnson",
    imgUrl: "https://i.pravatar.cc/150?img=3",
    subscription: "Customized",
    purchaseDate: "9th June, 2024",
    amount: "N12,300",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "4",
    name: "Alice Brown",
    imgUrl: "https://i.pravatar.cc/150?img=4",
    subscription: "Premium",
    purchaseDate: "9th June, 2024",
    amount: "N105,650",
    expiration: "Standard",
    admin: "Samson Edeh",
  },
  {
    id: "5",
    name: "Charlie White",
    imgUrl: "https://i.pravatar.cc/150?img=5",
    subscription: "Standard",
    purchaseDate: "9th June, 2024",
    amount: "N35,000",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "6",
    name: "Emily Davis",
    imgUrl: "https://i.pravatar.cc/150?img=6",
    subscription: "Customized",
    purchaseDate: "9th June, 2024",
    amount: "",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "7",
    name: "Michael Wilson",
    imgUrl: "https://i.pravatar.cc/150?img=7",
    subscription: "Premium",
    purchaseDate: "9th June, 2024",
    amount: "",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "8",
    name: "Sophia Martinez",
    imgUrl: "https://i.pravatar.cc/150?img=8",
    subscription: "Standard",
    purchaseDate: "9th June, 2024",
    amount: "",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "9",
    name: "James Anderson",
    imgUrl: "https://i.pravatar.cc/150?img=9",
    subscription: "Customized",
    purchaseDate: "9th June, 2024",
    amount: "",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
  {
    id: "10",
    name: "Olivia Thompson",
    imgUrl: "https://i.pravatar.cc/150?img=10",
    subscription: "Premium",
    purchaseDate: "9th June, 2024",
    amount: "",
    expiration: "Premium",
    admin: "Samson Edeh",
  },
];

const SubscriptionTable = () => {
  const columns: ColumnDef<RowData>[] = [
    {
      accessorKey: "",
      id: "number",
      header: () => <h1 className="font-semibold">School Name</h1>,
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
      accessorKey: "amount",
      header: () => <h1 className="font-semibold text-center">Amount</h1>,
      cell: (info) => {
        const amount = info.getValue() as string;

        return <p className="text-sm text-center">{amount}</p>;
      },
    },
    {
      accessorKey: "purchaseDate",
      header: () => <h1 className="font-semibold">Purchase Date</h1>,
      cell: (info) => {
        return <span className="text-sm">{info.getValue() as string}</span>;
      },
    },
    {
      accessorKey: "expiration",
      header: () => <h1 className="font-semibold text-center">Expiration</h1>,
      cell: (info) => {
        const expirationType = info.getValue() as string;
        console.log(expirationType);
        let style;
        switch (expirationType) {
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
              {expirationType}
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

  return (
    <CustomTable columns={columns} initialData={subscriptionInitialData} />
  );
};

export default SubscriptionTable;
