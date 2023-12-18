import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import Pocketbase from "pocketbase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

const UpdateInfo: React.FC = (): JSX.Element => {
  const pb = new Pocketbase("http://127.0.0.1:8090");

  const { user, setUser }: any = useContext(UserContext);

  const [formData, setFormData] = useState<any>({
    username: "",
    name: "",
    nic: "",
    address: "",
    phone: "",
    emergency_phone: "",
    blood_group: "",
  });

  const navigate = useNavigate();

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  console.log("updated user==> ", formData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const updatedUser = await pb
      .collection("users")
      .update(user.id, formData)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("error", error);
      });

    console.log("updated user", updatedUser);

    if (updatedUser != null && updatedUser != undefined) {
      window.localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setFormData({
        username: "",
        name: "",
        nic: "",
        address: "",
        phone: "",
        emergency_phone: "",
        blood_group: "",
      });
      //   navigate("/dashboard");
    } else {
      console.log("Can not store null or undefined value in local sotrage");
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">
        Update Information
      </p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            placeholder={"Username"}
            value={formData.username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("username", e.target.value)
            }
          />
          <Input
            label="Name"
            type="text"
            value={formData.name}
            placeholder={"Name"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("name", e.target.value)
            }
          />
          <Input
            label="nic"
            type="text"
            value={formData.nic}
            placeholder={"NIC"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("nic", e.target.value)
            }
          />
          <Input
            label="Address"
            type="text"
            value={formData.address}
            placeholder={"address"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("address", e.target.value)
            }
          />
          <Input
            label="Phone"
            type="text"
            value={formData.phone}
            placeholder={"phone"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("phone", e.target.value)
            }
          />
          <Input
            label="Emergency Phone"
            type="text"
            value={formData.emergency_phone}
            placeholder={"emergency phone"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("emergency_phone", e.target.value)
            }
          />
          <Input
            label="Blood Group"
            type="text"
            value={formData.blood_group}
            placeholder={"B+"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("blood_group", e.target.value)
            }
          />

          <Button
            label="Login"
            color={"primary-900"}
            disabled={false}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
