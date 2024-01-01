"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserAllowance = {
  id: string;
  user_id: string;
  status: "requested" | "approved" | "archived" | "rejected";
  allowance_amount: number;
  description: string;
  requested_by: string;
  user_email: string;
};

export const columns: ColumnDef<UserAllowance>[] = [
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
