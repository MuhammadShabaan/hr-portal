"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserSuggestion = {
  id: string;
  user_id: string;
  type: "compalain" | "suggestion";
  description: string;
  suggested_by: string;
  user_email: string;
  response: string;
};

export const columns: ColumnDef<UserSuggestion>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "user_id",
    header: "User Id",
  },
  {
    accessorKey: "type",
    header: "Suggestion Type",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "user_email",
    header: "User Email",
  },
  {
    accessorKey: "response",
    header: "Response",
  },
];
