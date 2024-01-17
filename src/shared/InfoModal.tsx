import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { logout } from "@/services/AuthService";

const Info = (): JSX.Element => {
  const [hide, setHide] = useState<boolean>(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   } else {
  //     return;
  //   }
  // }, [token]);

  return (
    <>
      <div className="flex items-center justify-center rounded-full  border border-neutral-900 w-6 h-6">
        <button onClick={() => setHide(!hide)}>
          <IoPersonOutline />
        </button>
      </div>
      {hide && (
        <div className="px-4 py-2 rounded  absolute right-[20px] my-3 bg-primary-900 mt-32">
          <p
            className="text-white cursor-pointer hover:bg-white hover:text-black px-3 rounded-sm"
            onClick={() => {
              setHide(!hide);
              navigate("/updateinfo");
            }}
          >
            Profile
          </p>
          <button
            className="text-white mt-2 cursor-pointer hover:bg-white hover:text-black px-3 rounded-sm"
            onClick={() => {
              logout();

              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Info;
