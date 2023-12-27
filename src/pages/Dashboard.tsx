import Dialogue from "../model/Dialogue";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";
import { useContext, useState } from "react";
import CreateUser from "../components/CreateUser";
import useSWR from "swr";
import { UserContext } from "../context/UserContext";
import { User, UsersList } from "../types/Types";

const Dashboard = ({ children }: any) => {
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

  const [hideUserModal, setHideUserModal] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>("");

  return (
    <div className="flex w-screen h-screen ">
      {/* {<Dialogue />} */}
      {hideUserModal && (
        <CreateUser
          setHideUserModal={() => setHideUserModal(!hideUserModal)}
          userType={userType}
        />
      )}
      <Sidebar user={user} />
      <Board
        // usersList={data?.items}
        setHideUserModal={(userType: string) => {
          setHideUserModal(!hideUserModal);
          setUserType(userType);
        }}
        children={children}
      />
    </div>
  );
};

export default Dashboard;
