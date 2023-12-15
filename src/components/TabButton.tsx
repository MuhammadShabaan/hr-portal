const TabButton = ({
  icon,
  label,
  color,
  onClick,
  textColor = "black",
}: any) => {
  return (
    <div className="w-full">
      <button
        className={`flex justify-start items-center pr-16 pl-5 py-3 space-x-4 bg-${color}`}
        onClick={(e) => {
          e.preventDefault();
          onClick;
        }}
      >
        {icon && icon}
        <p className={`capitalize text-${textColor}`}>{label}</p>
      </button>
    </div>
  );
};

export default TabButton;
