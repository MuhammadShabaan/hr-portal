import pb from "./PocketBase";
import { RecordModel } from "pocketbase";
import { UpdateUser, User } from "@/types/Types";

// Create

const CreateUser = async (data: User): Promise<RecordModel | void> => {
  try {
    const user = await pb.collection("users").create(data);
    return user;
  } catch (error) {
    console.log(error);
  }
};

// Update

const UpdateUserInfo = async (
  userId: string,
  data: UpdateUser
): Promise<RecordModel | void> => {
  try {
    const updatedUser = await pb.collection("users").update(userId, data);
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};

// Delete

const DeleteUser = async (
  userId: string
): Promise<string | void | undefined | boolean> => {
  try {
    const deletedUser = await pb.collection("users").delete(userId);
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
};

export { CreateUser, UpdateUserInfo, DeleteUser };
