import pb from "./PocketBase";
import { RecordModel } from "pocketbase";
import { CreateCertificate } from "@/types/Types";

//  Get

const GetCertificates = async (): Promise<RecordModel[] | void> => {
  const user = pb.authStore.model;
  try {
    const certificates =
      user?.role === "employee"
        ? await pb
            .collection("certificates")
            .getFullList({ filter: `user_id = "${user?.id}"` })
        : await pb.collection("certificates").getFullList();
    return certificates;
  } catch (error) {
    console.log(error);
  }
};

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

export {
  GetCertificates,
  CreateUserCertificate,
  UpdateUserCertificate,
  DeleteUserCertificate,
};
