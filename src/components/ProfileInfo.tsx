import { IoPersonOutline } from "react-icons/io5";

const ProfileInfo = ({ name, email, role }: any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center bg-background-primary w-36 h-36 rounded-full my-2 sm:my-3">
        <IoPersonOutline className="w-16 h-16" />
      </div>
      <p className="text-white text-center text-sm sm:text-lg">{name}</p>
      <p className="text-white text-center text-sm sm:text-base -mt-1">
        {email}
      </p>
      <p className="text-white text-center text-sm mt-3">
        Logged in as :{" "}
        <span className="bg-gray-300 rounded-md px-2 py-1 capitalize text-black">
          {role}
        </span>
      </p>
    </div>
  );
};

export default ProfileInfo;
