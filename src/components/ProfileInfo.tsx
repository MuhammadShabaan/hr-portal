import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { IoPersonOutline } from "react-icons/io5";

const ProfileInfo = () => {
  const { user }: any = useContext(UserContext);
  const userName = user?.username;
  const userEmail = user?.email;
  const userRole = user?.role;
  const avatar = user?.avatar;
  const userId = user?.id;
  const avatarUrl = `http://127.0.0.1:8090/api/files/users/${userId}/${avatar}`;

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center bg-background-primary w-36 h-36 rounded-full my-2 sm:my-3">
        {avatar ? (
          <img src={avatarUrl} alt="" className="rounded-full w-full h-full" />
        ) : (
          <IoPersonOutline className="w-16 h-16" />
        )}
      </div>
      <p className="text-white text-center text-sm sm:text-lg">{userName}</p>
      <p className="text-white text-center text-sm sm:text-base -mt-1">
        {userEmail}
      </p>
      <p className="text-white text-center text-sm mt-3">
        Logged in as :{" "}
        <span className="bg-gray-300 rounded-md px-2 py-1 capitalize text-black">
          {userRole}
        </span>
      </p>
    </div>
  );
};

export default ProfileInfo;
