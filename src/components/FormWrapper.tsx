const FormWrapper = ({ onClick, children }: any) => {
  return (
    <div className=" absolute top-0 left-0 bottom-0 right-0 bg-slate-500 z-10 py-6 px-10">
      <div className="flex items-center justify-end cursor-pointer">
        <div onClick={onClick}>
          <p className="w-6 h-6 rounded-full flex items-center justify-center px-1 bg-white">
            x
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default FormWrapper;
