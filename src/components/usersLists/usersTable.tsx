import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const UsersListsTable = ({ usersList }: any) => {
  //   function getData(): Promise<Payment[]> {
  //     // Fetch data from your API here.
  //     return [...usersList];
  //   }
  //   const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={usersList} />
    </div>
  );
};

export default UsersListsTable;
