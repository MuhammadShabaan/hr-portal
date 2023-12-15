const Button = ({ icon, label, disabled, onClick, color = "primary-900" }) => {
  return (
    <div className="my-8">
      <button
        className={`flex justify-center items-center space-x-3 w-full px-5 rounded-md text-white py-2 ${
          disabled ? "bg-neutral-500 cursor-not-allowed" : `bg-${color}`
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        {icon && icon}
        {<p className="capitalize">{label}</p>}
      </button>
    </div>
  );
};

export default Button;
