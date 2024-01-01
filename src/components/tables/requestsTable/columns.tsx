"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserRequest = {
  id: string;
  request_type: "leave" | "short leave" | "allowance" | "work from home";
  status: "pending" | "accepted" | "declined";
  description: string;
  note: string;
  requested_by: string;
  user_email: string;
};

export const columns: ColumnDef<UserRequest>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "request_type",
    header: "Request Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "note",
    header: "Note",
  },
  {
    accessorKey: "requested_by",
    header: "Requested By",
  },
  {
    accessorKey: "user_email",
    header: "User Email",
  },
];
