import { FaMailBulk } from "react-icons/fa";
import Button from "./Button";

const Dialogue = () => {
  return (
    <div className="flex items-center justify-center bg-slate-500/60 z-10 absolute top-0 left-0 bottom-0 right-0">
      <div className="rounded-md bg-white px-7 py-4 w-96 h-96">
        <div>
          <p className="text-right cursor-pointer">x</p>
          <p className="text-center text-2xl">
            Your request has been successfully submitted
          </p>
          <div className="flex items-center justify-center">
            <FaMailBulk className="w-28 h-28 text-primary-800" />
          </div>
          <Button color="primary-800" label="Back to Home" />
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
