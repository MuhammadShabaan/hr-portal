import { CreateAllowance } from "@/types/Types";
import pb from "./PocketBase";
import { RecordModel } from "pocketbase";

// Create

const CreateUserAllowance = async (
  data: CreateAllowance
): Promise<RecordModel | void> => {
  try {
    const allowance = await pb.collection("user_allowances").create(data);
    return allowance;
  } catch (error) {
    console.log(error);
  }
};

// Update

const UpdateUserAllowance = async (
  allowanceId: string,
  data: any
): Promise<RecordModel | void> => {
  try {
    const updatedAllowance = await pb
      .collection("user_allowances")
      .update(allowanceId, data);
    return updatedAllowance;
  } catch (error) {
    console.log(error);
  }
};

// Delete

const DeleteUserAllowance = async (
  allowanceId: string
): Promise<string | void | undefined | boolean> => {
  try {
    const deletedAllowance = await pb
      .collection("user_allowances")
      .delete(allowanceId);
    // will be a boolean value  "true" if deleted successfully
    return deletedAllowance;
  } catch (error) {
    console.log(error);
  }
};

export { CreateUserAllowance, UpdateUserAllowance, DeleteUserAllowance };
