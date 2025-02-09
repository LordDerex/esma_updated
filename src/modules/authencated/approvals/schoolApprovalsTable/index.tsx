import React from "react";
import CustomTable from "components/table";
import icons from "constants/icons";
import { ColumnDef } from "@tanstack/react-table";

interface RowData {
  imgUrl: string;
  schoolName: string;
  subscription: "Premium" | "Standard" | "Customized";
  amount: string;
  admin: string;
  status: "Approvals" | "Rejected";
}

const SchoolApprovalsTable = () => {
  const [accessPointId, setAccessPointId] = React.useState<string | null>(null);

  const schoolInitialData: RowData[] = [
    {
      imgUrl: "https://i.pravatar.cc/150?img=2",
      schoolName: "Greenwood International School",
      subscription: "Premium",
      amount: "$1,200",
      admin: "John Doe",
      status: "Approvals",
    },
    {
      imgUrl: "https://i.pravatar.cc/150?img=2",
      schoolName: "Bright Future Academy",
      subscription: "Standard",
      amount: "$850",
      admin: "Jane Smith",
      status: "Rejected",
    },
    {
      imgUrl: "https://i.pravatar.cc/150?img=2",
      schoolName: "Hilltop High School",
      subscription: "Customized",
      amount: "$2,500",
      admin: "Michael Johnson",
      status: "Approvals",
    },
    {
      imgUrl: "https://i.pravatar.cc/150?img=2",
      schoolName: "Sunrise Learning Center",
      subscription: "Premium",
      amount: "$1,000",
      admin: "Emily White",
      status: "Rejected",
    },
    {
      imgUrl: "https://i.pravatar.cc/150?img=2",
      schoolName: "Elite Scholars Academy",
      subscription: "Standard",
      amount: "$900",
      admin: "Daniel Brown",
      status: "Approvals",
    },
  ];

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
        const id = info.row.original.schoolName;

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
      header: () => (
        <h1 className="font-semibold w-[80%] text-center">School Name</h1>
      ),
      cell: (info) => {
        const imgUrl = info.row.original.imgUrl;
        const name = info.row.original.schoolName;

        return (
          <div className="text-center flex gap-3 items-center">
            <img
              src={"https://i.pravatar.cc/150?img=2"}
              alt={name}
              className="w-11 h-11 rounded-full"
            />
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
      accessorKey: "admin",
      header: () => <h1 className="font-semibold text-center">Admin</h1>,
      cell: (info) => {
        const admin = info.getValue() as string;

        return <p className="text-sm text-center">{admin}</p>;
      },
    },
    {
      accessorKey: "status",
      header: () => <h1 className="font-semibold text-center">Status</h1>,
      cell: (info) => {
        const status = info.getValue() as string;

        let style;
        switch (status) {
          case "Approvals":
            style = "bg-green-600 text-green-200";
            break;
          case "Rejected":
            style = "bg-red-700 text-red-200";
            break;

          default:
            style = "bg-[#FFDD67] text-[#EBA352]";
            break;
        }

        return (
          <div className="flex justify-center items-center h-full">
            <span className={`text-sm px-5 py-1 rounded ${style}`}>
              {status}
            </span>
          </div>
        );
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

  return <CustomTable columns={columns} initialData={schoolInitialData} />;
};

export default SchoolApprovalsTable;
