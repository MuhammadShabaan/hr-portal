import { DeleteUser } from "@/api/user";
import { UserContext } from "@/context/UserContext";
import Button from "@/model/Button";
import { useContext } from "react";
import { FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";

const AllUsers = () => {
  const { user }: any = useContext(UserContext);

  const fetcher = async (url: string): Promise<UsersList | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8090/api/collections/users/records",
    fetcher
  );

  const deleteUser = async (userId: any): Promise<any> => {
    const deletedUser = await DeleteUser(userId);
    if (deletedUser === undefined) {
      console.log(`User with id:${userId} deleted successfully!`);
    }
  };

  return (
    <div>
      <p className="text-center">All Users</p>
      {data?.items.map(
        ({
          name,
          username,
          email,
          id,
          nic,
          pay,
          roles,
          phone,
          emergency_phone,
        }: any) => (
          <div key={id} className="flex items-center justify-between mb-">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{id}</p>
            <p>{nic}</p>
            <p>{pay}</p>
            {user?.id === id ? (
              <p className="bg-white text-black px-2 p-2 rounded-sm ">
                {roles} <span className="text-red-900">(You)</span>
              </p>
            ) : (
              <p>{roles}</p>
            )}
            <p>{phone}</p>
            <p>{emergency_phone}</p>
            {user?.id !== id && (
              <div>
                <Button
                  icon={<FaRemoveFormat />}
                  onClick={() => deleteUser(id)}
                />
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default AllUsers;
