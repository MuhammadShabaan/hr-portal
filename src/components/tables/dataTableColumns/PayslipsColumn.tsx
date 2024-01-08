import { UserPayslip } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const PayslipsColumns: ColumnDef<UserPayslip>[] = [
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
