import pb from "./PocketBase";
import { RecordModel } from "pocketbase";
import { CreateCertificate } from "@/types/Types";

// Create

const CreateUserCertificate = async (
  data: CreateCertificate
): Promise<RecordModel | void> => {
  try {
    const certificate = await pb.collection("certificates").create(data);
    return certificate;
  } catch (error) {
    console.log(error);
  }
};

// Update

const UpdateUserCertificate = async (
  certificateId: string,
  data: any
): Promise<RecordModel | void> => {
  try {
    const updatedCertificate = await pb
      .collection("certificates")
      .update(certificateId, data);
    return updatedCertificate;
  } catch (error) {
    console.log(error);
  }
};

// Delete

const DeleteUserCertificate = async (
  certificateId: string
): Promise<string | void | undefined | boolean> => {
  try {
    const deletedCertifcate = await pb
      .collection("certificates")
      .delete(certificateId);
    //  will be a boolean value  "true" if deleted successfully
    return deletedCertifcate;
  } catch (error) {
    console.log(error);
  }
};

export { CreateUserCertificate, UpdateUserCertificate, DeleteUserCertificate };
