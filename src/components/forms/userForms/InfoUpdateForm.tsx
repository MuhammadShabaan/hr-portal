import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import { UserContext } from "@/context/UserContext";
import { UpdateUserInfo } from "@/api/user";
import { UpdateUser } from "@/types/Types";

const InfoUpdateForm: React.FC = (): JSX.Element => {
  const { user, setUser }: any = useContext(UserContext);

  const [form, setForm] = useState<UpdateUser>({
    username: user.username,
    name: user.name,
    nic: user.nic,
    address: user.address,
    phone: user.phone,
    emergency_phone: user.emergency_phone,
    blood_group: user.blood_group,
  });

  const formData = new FormData();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileInput = e.target;
    const files = fileInput.files;

    for (let file of files) {
      formData.append("avatar", file);
    }
  };

  const createForm = (key: string, value: string): void => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    formData.append("username", form.username);
    formData.append("name", form.name);
    formData.append("nic", form.nic);
    formData.append("address", form.address);
    formData.append("phone", form.phone);
    formData.append("emergancy_phone", form.emergency_phone);
    formData.append("blood_group", form.blood_group);

    const updatedUser = await UpdateUserInfo(user.id, formData);

    if (updatedUser != null && updatedUser != undefined) {
      window.localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setForm({
        username: "",
        name: "",
        nic: "",
        address: "",
        phone: "",
        emergency_phone: "",
        blood_group: "",
      });
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
          <input type="file" id="fileInput" onChange={handleFileChange} />
          <Input
            label="Username"
            type="text"
            placeholder={"Username"}
            value={form.username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("username", e.target.value)
            }
          />
          <Input
            label="Name"
            type="text"
            value={form.name}
            placeholder={"Name"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("name", e.target.value)
            }
          />
          <Input
            label="nic"
            type="text"
            value={form.nic}
            placeholder={"NIC"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("nic", e.target.value)
            }
          />
          <Input
            label="Address"
            type="text"
            value={form.address}
            placeholder={"address"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("address", e.target.value)
            }
          />
          <Input
            label="Phone"
            type="text"
            value={form.phone}
            placeholder={"phone"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("phone", e.target.value)
            }
          />
          <Input
            label="Emergency Phone"
            type="text"
            value={form.emergency_phone}
            placeholder={"emergency phone"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("emergency_phone", e.target.value)
            }
          />
          <Input
            label="Blood Group"
            type="text"
            value={form.blood_group}
            placeholder={"B+"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("blood_group", e.target.value)
            }
          />

          <Button
            label="Update"
            color={"primary-900"}
            disabled={false}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default InfoUpdateForm;
