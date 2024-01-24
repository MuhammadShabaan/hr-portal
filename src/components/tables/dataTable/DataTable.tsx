import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

import pb from "@/services/PocketBase";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  handleDelete: () => void;
  handleEdit: () => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  handleDelete,
  handleEdit,
  collectionName,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const user = pb.authStore.model;
  const role = user?.role;

  return (
    <div className="rounded-md border ">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table?.getRowModel()?.rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    {/* {"hello"} */}
                  </TableCell>
                ))}
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center justify-center gap-3">
                    <RiDeleteBin2Line
                      className="text-red-800 cursor-pointer"
                      onClick={() => handleDelete(row?.original?.id)}
                    />
                    {role !== "employee" && (
                      <FaEdit
                        className="text-green-400 cursor-pointer"
                        onClick={() => handleEdit(row?.original)}
                      />
                    )}
                  </div>
                  {collectionName === "certificates" && (
                    <div>
                      <a
                        href={`http://127.0.0.1:8090/api/files/${collectionName}/${row?.original?.id}/${row?.original?.file}`}
                        target="_blank"
                      >
                        View File
                      </a>
                    </div>
                  )}
                </div>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
