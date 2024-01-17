import { CreateRequest } from "@/types/Types";
import pb from "./PocketBase";
import { RecordModel } from "pocketbase";

//  Create

const CreateUserRequest = async (
  data: CreateRequest
): Promise<RecordModel | void> => {
  try {
    const request = await pb.collection("user_requests").create(data);
    return request;
  } catch (error) {
    console.log(error);
  }
};

//  Update

const UpdateUserRequest = async (
  requestId: string,
  data: any
): Promise<RecordModel | void> => {
  try {
    const updatedRequest = await pb
      .collection("user_requests")
      .update(requestId, data);
    return updatedRequest;
  } catch (error) {
    console.log(error);
  }
};

//  Delete

const DeleteUserRequest = async (
  requestId: string
): Promise<string | void | undefined | boolean> => {
  try {
    const deletedRequest = await pb
      .collection("user_requests")
      .delete(requestId);
    //  will be a boolean value  "true" if deleted successfully
    return deletedRequest;
  } catch (error) {
    console.log(error);
  }
};

export { CreateUserRequest, UpdateUserRequest, DeleteUserRequest };
