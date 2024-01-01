"use client";

import { ColumnDef } from "@tanstack/react-table";

export type UserSuggestion = {
  id: string;
  basic_pay: number;
  allowance: number;
};

export const columns: ColumnDef<UserSuggestion>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "basic_pay",
    header: "Basic Pay",
  },
  {
    accessorKey: "allowance",
    header: "Allowance",
  },
];
