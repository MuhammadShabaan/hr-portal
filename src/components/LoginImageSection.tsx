const LoginImageSection = ({ userType = "admin" }: any) => {
  const loginImage =
    userType === "admin"
      ? "../src/assets/images/admin-login 1.png"
      : "../assets/images/employee-login 1.png";
  return (
    <div className="h-[600px] space-y-28 py-3 md:py-6">
      <p className="text-center text-h1r md:text-h3r capitalize">Logo</p>
      <div className="w-96">
        <img src={loginImage} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default LoginImageSection;
