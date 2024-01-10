import { UserRequest } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const RequestsColumns = (role: string) => {
  const requestsColumns: ColumnDef<UserRequest>[] =
    role === "employee"
      ? [
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
        ]
      : [
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
  return requestsColumns;
};
