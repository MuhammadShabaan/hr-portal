import { UserCertificate } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const CertificatesColumns: ColumnDef<UserCertificate>[] = [
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
