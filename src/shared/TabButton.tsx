import { Link } from "react-router-dom";

const TabButton = ({ icon, label, color, to, textColor = "black" }: any) => {
  return (
    <div className="w-full">
      <Link
        to={to}
        className={`flex justify-start items-center pr-16 pl-5 py-3 space-x-4 bg-${color}`}
      >
        {icon && icon}
        <p className={`capitalize text-${textColor}`}>{label}</p>
      </Link>
    </div>
  );
};

export default TabButton;
