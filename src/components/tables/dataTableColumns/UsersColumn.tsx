import { User } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const UsersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "username",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "nic",
    header: "NIC",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "emergency_phone",
    header: "Emergency Phone",
  },
  {
    accessorKey: "pay",
    header: "Pay",
  },
  {
    accessorKey: "emergency_phone",
    header: "Emergency Phone",
  },
  {
    accessorKey: "pay",
    header: "Pay",
  },
  {
    accessorKey: "employee_status",
    header: "Employee Status",
  },
  {
    accessorKey: "job_type",
    header: "Job Type",
  },
  {
    accessorKey: "blood_group",
    header: "Blood Group",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "joining_date",
    header: "Joining Date",
  },
];
