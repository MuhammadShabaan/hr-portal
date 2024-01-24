import { UserCertificate } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const CertificatesColumns = (role: string) => {
  const certificatesColumns: ColumnDef<UserCertificate>[] =
    role === "employee"
      ? [
          {
            accessorKey: "title",
            header: "Title",
          },
          {
            accessorKey: "type",
            header: "Type",
          },
          {
            accessorKey: "status",
            header: "Status",
          },
          {
            accessorKey: "file",
            header: "File",
          },
        ]
      : [
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
          {
            accessorKey: "status",
            header: "Status",
          },
          {
            accessorKey: "file",
            header: "File",
          },
          {
            accessorKey: "action",
            header: "Action",
          },
        ];

  return certificatesColumns;
};
