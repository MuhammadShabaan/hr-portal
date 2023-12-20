import Dialogue from "../components/Dialogue";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";
import { useContext, useState } from "react";
import CreateUser from "../components/CreateUser";
import useSWR from "swr";
import { UserContext } from "../context/UserContext";
import { User, UsersList } from "../types/Types";
import Certificate from "../components/Certificate";
import EmployeePayslip from "../components/EmployeePayslip";
import Suggestions from "../components/Suggestions";
import UserRequest from "../components/UserRequest";
import EmployeeAllowance from "../components/EmployeeAllowance";

const Dashboard = () => {
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
  const [userComponent, setUserComponent] = useState<any>();

  const userForms = (index: any) => {
    console.log("index received===>", index);
    const userFormComponents: any = [
      <Certificate />,
      <EmployeePayslip />,
      <Suggestions />,
      <EmployeeAllowance />,
      <UserRequest />,
    ];

    return setUserComponent(userFormComponents[index]);
  };

  return (
    <div className="flex w-screen h-screen ">
      {/* {<Dialogue />} */}
      {hideUserModal && (
        <CreateUser
          setHideUserModal={() => setHideUserModal(!hideUserModal)}
          userType={userType}
        />
      )}
      <Sidebar
        user={user}
        selectFormElement={(index: any) => userForms(index)}
      />
      <Board
        // usersList={data?.items}
        setHideUserModal={(userType: string) => {
          setHideUserModal(!hideUserModal);
          setUserType(userType);
        }}
        employeeComponent={userComponent}
      />
    </div>
  );
};

export default Dashboard;
