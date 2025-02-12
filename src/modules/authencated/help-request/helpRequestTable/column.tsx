import { ColumnDef } from "@tanstack/react-table";
import { HelpRequest } from "./types";

const columns: ColumnDef<HelpRequest>[] = [
  {
    id: "select",
    header: () => <input type="checkbox" />,
    cell: ({ row }) => <input type="checkbox" />,
  },
  {
    accessorKey: "ticketId",
    header: "Ticket ID",
  },
  {
    accessorFn: (row) => row.user,
    id: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.original.user;

      return (
        <div className="flex items-center gap-3">
          <img
            src={user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
          <span>{user.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "dateSubmitted",
    header: "Date Submitted",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as "Open Request";
      const statusIcons: Record<"Open Request", string> = {
        "Open Request": "🟢",
      };
      return (
        <div className="flex items-center gap-2">
          <span className="text-lg">{statusIcons[status]}</span>
          <span>{status}</span>
        </div>
      );
    },
  },
];
export default columns;
