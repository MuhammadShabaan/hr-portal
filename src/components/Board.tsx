import { useNavigate } from "react-router-dom";
import MenuDashboard from "./MenuDashboard";
import CreateUserModal from "./CreateUserModal";

import PocketBase from "pocketbase";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import AllUsers from "./tables/userTables/UsersTable";
import AllRequests from "./tables/userTables/RequestsTable";
import AllAllowances from "./tables/userTables/AllowancesTable";
import AllCertificates from "./tables/userTables/CertificatesTable";
import AllPayslips from "./tables/userTables/PayslipsTable";
import AllSuggestions from "./tables/userTables/SuggestionsTable";

interface HideModal {
  setHideUserModal(): void;
}
const Board = ({ setHideUserModal, children }: any): JSX.Element => {
  const { user, setUser }: any = useContext(UserContext);

  const role = user?.role;

  const pb = new PocketBase("http://127.0.0.1:8090");

  const navigate = useNavigate();

  const logOutUser = (): void => {
    window.localStorage.removeItem("user");
    pb.authStore.clear();
    setUser({});
    navigate("/");
  };

  return (
    <div className="bg-background-primary w-[80%] ">
      <MenuDashboard logOutUser={logOutUser} />
      {user?.role === "employee" ? (
        <div className="flex items-center justify-center w-full mt-10">
          {children}
        </div>
      ) : (
        <div>
          <div className="flex justify-end px-3 py-5">
            <CreateUserModal
              setHideUserModal={setHideUserModal}
              userRole={user?.role}
            />
          </div>
          {
            <div className=" space-y-4 px-5">
              <AllUsers />
              <div>
                <p className="text-center">Users Requests</p>
                <AllRequests />
              </div>
              <div>
                <p className="text-center">Users All Allowance Requests</p>
                <AllAllowances />
              </div>
              <div>
                <p className="text-center">Users All Certificate Requests</p>
                <AllCertificates />
              </div>
              <div>
                <p className="text-center">Users All Payslips</p>
                <AllPayslips />
              </div>
              <div>
                <p className="text-center">Users All Suggestions</p>
                <AllSuggestions role={role} />
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Board;
