import { ColumnDef } from "@tanstack/react-table";
import { UserAllowance } from "../../../types/Types";

export const AllowancesColumns = (role: string) => {
  const allowancesColumns: ColumnDef<UserAllowance>[] =
    role === "employee"
      ? [
          {
            accessorKey: "id",
            header: "Id",
          },
          {
            accessorKey: "allowance_amount",
            header: "Allowance Amount",
          },
          {
            accessorKey: "description",
            header: "Description",
          },
          {
            accessorKey: "actions",
            header: "Actions",
          },
          {
            accessorKey: "user_id",
            header: "User Id",
          },
        ]
      : [
          {
            accessorKey: "user_id",
            header: "User Id",
          },
          {
            accessorKey: "allowance_amount",
            header: "Allowance Amount",
          },
          {
            accessorKey: "requested_by",
            header: "Requested By",
          },
          {
            accessorKey: "user_email",
            header: "User Email",
          },
          {
            accessorKey: "description",
            header: "Description",
          },
          {
            accessorKey: "status",
            header: "Status",
          },
          {
            accessorKey: "actions",
            header: "Actions",
          },
        ];
  return allowancesColumns;
};
