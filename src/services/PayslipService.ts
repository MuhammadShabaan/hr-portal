import pb from "./PocketBase";
import { RecordModel } from "pocketbase";
import { User } from "@/types/Types";

// Get

const GetPayslips = async (): Promise<RecordModel[] | void> => {
  try {
    const payslips = await pb.collection("payslips").getFullList();
    return payslips;
  } catch (error) {
    console.log(error);
  }
};

// Create

const CreateUserPayslip = async (data: User): Promise<RecordModel | void> => {
  try {
    const payslip = await pb.collection("payslips").create(data);
    return payslip;
  } catch (error) {
    console.log(error);
  }
};

// Update

const UpdateUserPayslip = async (
  payslipId: string,
  data: any
): Promise<RecordModel | void> => {
  try {
    const updatedPayslip = await pb
      .collection("payslips")
      .update(payslipId, data);
    return updatedPayslip;
  } catch (error) {
    console.log(error);
  }
};

//  Delete

const DeleteUserPayslip = async (
  payslipId: string
): Promise<string | void | undefined | boolean> => {
  try {
    const deletedPayslip = await pb.collection("payslips").delete(payslipId);
    //  will be a boolean value  "true" if deleted successfully
    return deletedPayslip;
  } catch (error) {
    console.log(error);
  }
};

export { GetPayslips, CreateUserPayslip, UpdateUserPayslip, DeleteUserPayslip };
