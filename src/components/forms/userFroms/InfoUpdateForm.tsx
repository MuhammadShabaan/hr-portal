import { useState, ChangeEvent, FormEvent } from "react";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
// :TODO Check for potential Bugs in this after Auth context Update

import { UpdateUserInfo } from "@/services/UserService";
import { UpdateUser } from "@/types/Types";
import pb from "@/services/PocketBase";
import ProfileInfo from "../../ProfileInfo";
import { IoPersonOutline } from "react-icons/io5";

const InfoUpdateForm: React.FC = (): JSX.Element => {
  const user = pb.authStore.model;
  const userId = user?.id;
  const avatar = user?.avatar;
  const getAvatar = `http://127.0.0.1:8090/api/files/users/${userId}/${avatar}`;

  const [avatarUrl, setAvatarUrl] = useState<string>(getAvatar);

  const [form, setForm] = useState<UpdateUser>({
    username: user?.username,
    name: user?.name,
    nic: user?.nic,
    address: user?.address,
    phone: user?.phone,
    emergency_phone: user?.emergency_phone,
    blood_group: user?.blood_group,
    email: user?.email,
  });

  const formData = new FormData();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileInput = e.target;
    const files = fileInput.files;

    if (!!files) {
      for (let file of files) {
        formData.append("avatar", file);
        setAvatarUrl(file?.name);
      }
    } else {
      //:TODO : Handle This gracefull
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
    formData.append("email", form.email);

    const updatedUser = await UpdateUserInfo(user?.id, formData);

    if (updatedUser?.id) {
      setForm({
        username: "",
        name: "",
        nic: "",
        address: "",
        phone: "",
        emergency_phone: "",
        blood_group: "",
        email: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-8 h-full space-x-20 rounded-md border border-gray-400">
      <div className="flex flex-col items-start h-full justify-between max-w-[30%] ">
        <div>
          <p className="text-black text-xl font-bold">Personal Information</p>
          <p className="text-gray-700">
            Use correct iformation for streamline flow.
          </p>
        </div>
        <div>
          <p className="text-black text-xl font-bold">Change Password</p>
          <p className="text-gray-700">
            Use correct iformation for streamline flow.
          </p>
        </div>
      </div>
      <div className="max-w-3xl ">
        <p className="text-center text-h1b md:text-h3r capitalize mb-7">
          Update Information
        </p>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center bg-background-primary w-10 h-10 rounded-full my-2 sm:my-3">
              {avatar.length ? (
                <img
                  src={avatarUrl}
                  alt=""
                  className="rounded-full w-full h-full"
                />
              ) : (
                <IoPersonOutline className="w-10 h-10" />
              )}
            </div>
            <input type="file" id="fileInput" onChange={handleFileChange} />
            <div className="flex items-center justify-between gap-3">
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
            </div>
            <Input
              label="email"
              type="text"
              value={form.email}
              placeholder={"Email"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                createForm("email", e.target.value)
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

            <div className="flex items-center justify-between gap-3">
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
            </div>
            <div className="flex items-center justify-between gap-3">
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
                label="Blood Group"
                type="text"
                value={form.blood_group}
                placeholder={"B+"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  createForm("blood_group", e.target.value)
                }
              />
            </div>
            <div className="flex items-center justify-start gap-4 ">
              <Button
                label="Cancel"
                color={"red-800"}
                disabled={true}
                // onClick={}
              />
              <Button
                label="Update"
                color={"primary-900"}
                disabled={false}
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoUpdateForm;
