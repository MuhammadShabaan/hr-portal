"use client";

import { ColumnDef } from "@tanstack/react-table";

export type UserSuggestion = {
  id: string;
  title: string;
  type: "certificate" | "letter";
  requested_by: string;
  user_email: string;
};

export const columns: ColumnDef<UserSuggestion>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "type",
    header: "Type",
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
