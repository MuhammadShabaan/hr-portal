import { UserPayslip } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const PayslipsColumns = (role: string) => {
  const payslipsColumns: ColumnDef<UserPayslip>[] =
    role === "employee"
      ? [
          {
            accessorKey: "basic_pay",
            header: "Basic Pay",
          },
          {
            accessorKey: "allowance",
            header: "Allowance",
          },
        ]
      : [
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

  return payslipsColumns;
};
