import { UserSuggestion } from "../../../types/Types";
import { ColumnDef } from "@tanstack/react-table";

export const SuggestionsColumns: ColumnDef<UserSuggestion>[] = [
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
