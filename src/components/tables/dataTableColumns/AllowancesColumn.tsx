import { ColumnDef } from "@tanstack/react-table";
import { UserAllowance } from "../../../types/Types";

export const AllowancesColumns: ColumnDef<UserAllowance>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "user_id",
    header: "User Id",
  },
  {
    accessorKey: "status",
    header: "Status",
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
    accessorKey: "requested_by",
    header: "Requested By",
  },
  {
    accessorKey: "user_email",
    header: "User Email",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
