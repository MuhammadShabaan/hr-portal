import Dialogue from "../components/Dialogue";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import CreateUser from "../components/CreateUser";
import Pocketbase from "pocketbase";
import useSWR from "swr";

const Dashboard = () => {
  const [user, setUser] = useState(() => {
    const getUser: any = window.localStorage.getItem("user");
    return JSON.parse(getUser);
  });

  const pb = new Pocketbase("http://127.0.0.1:8090");

  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // return data;
    console.log("data", data);
  };
  const { data, error, isLoadinv } = useSWR(
    "http://127.0.0.1:8090/api/collections/users/records",
    fetcher
  );

  useEffect(() => {
    const fetchUserslist = async () => {
      const record = await pb
        .collection("users")
        .getFullList()
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log("error", error);
        });
      console.log("record===>", record);
    };
    fetchUserslist();
  }, []);
  const [hideUserModal, setHideUserModal] = useState<boolean>(false);
  const [userType, setUserType] = useState<any>("");

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
        setHideUserModal={(userType: any) => {
          setHideUserModal(!hideUserModal);
          setUserType(userType);
        }}
      />
    </div>
  );
};

export default Dashboard;
