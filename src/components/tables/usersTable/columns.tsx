"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
  id: string;
  username: string;
  email: string;
  nic: string;
  address: string;
  phone: string;
  emergency_phone: string;
  pay: string;
  employee_status: string;
  job_type: "part time" | "full time";
  blood_group: string;
  roles: "manager" | "admin" | "employee";
  joining_date: string;
};

export const columns: ColumnDef<Users>[] = [
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
