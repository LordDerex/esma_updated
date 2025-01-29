import { useTable } from "hooks";
import { UseTableProps } from "types";
import { flexRender } from "@tanstack/react-table";

const CustomTable = <T,>({
  columns,
  initialData,
  addRowStyle,
  rowBackgroundColor = "bg-white",
}: UseTableProps<T>) => {
  const { table, data } = useTable({
    columns,
    initialData,
  });

  return (
    <div className="max-w-full border rounded-lg overflow-hidden">
      <div className={`w-full border rounded-lg`}>
        <table className="border-spacing-y-table w-full table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-[#F4F3FB]">
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className={`text-[#000] font-bold text-base tracking-[-0.06px] py-4 px-4 text-left 
                    ${index === 0 ? "rounded-tl-lg" : ""} 
                    ${
                      index === headerGroup.headers.length - 1
                        ? "rounded-tr-lg"
                        : ""
                    }`}
                    style={{
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                      backgroundColor: "#EAECF0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className={rowBackgroundColor}>
            {data && data.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="text-[#1F2734] text-[0.85rem] border-b-[1.2px] border-[#AAAAAA]"
                  style={{ ...addRowStyle?.(row.original) }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`py-4 px-4 text-left ${
                        cell.column.id === "actions"
                          ? "sticky right-0 bg-white"
                          : ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={table.getHeaderGroups()[0].headers.length}>
                  <div className="text-center py-6 text-[#8C8C8C]">
                    No Data Available
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
