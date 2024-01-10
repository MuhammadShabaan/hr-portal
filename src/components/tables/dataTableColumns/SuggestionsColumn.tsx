import { UserSuggestion } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const SuggestionsColumns = (role: string) => {
  const suggestionsColumns: ColumnDef<UserSuggestion>[] =
    role === "employee"
      ? [
          {
            accessorKey: "type",
            header: "Suggestion Type",
          },
          {
            accessorKey: "description",
            header: "Description",
          },
          {
            accessorKey: "response",
            header: "Response",
          },
        ]
      : [
          {
            accessorKey: "id",
            header: "Id",
          },
          {
            accessorKey: "type",
            header: "Suggestion Type",
          },
          {
            accessorKey: "suggested_by",
            header: "Suggested By",
          },
          {
            accessorKey: "user_email",
            header: "User Email",
          },
          {
            accessorKey: "description",
            header: "Description",
          },
          {
            accessorKey: "response",
            header: "Response",
          },
        ];

  return suggestionsColumns;
};
