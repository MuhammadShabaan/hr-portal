import pb from "./PocketBase";
import { RecordModel } from "pocketbase";
import { CreateSuggestion, UpdateSuggestion } from "@/types/Types";

//  Create

const CreateUserSuggestion = async (
  data: CreateSuggestion
): Promise<RecordModel | void> => {
  try {
    const suggestion = await pb.collection("suggestions").create(data);
    return suggestion;
  } catch (error) {
    console.log(error);
  }
};

// Update

const UpdateUserSuggestion = async (
  suggestionId: string,
  data: UpdateSuggestion
): Promise<RecordModel | void> => {
  try {
    const updatedSuggestion = await pb
      .collection("suggestions")
      .update(suggestionId, data);
    return updatedSuggestion;
  } catch (error) {
    console.log(error);
  }
};

// Delete

const DeleteUserSuggestion = async (
  suggestionId: string
): Promise<string | void | undefined | boolean> => {
  try {
    const deletedSuggestion = await pb
      .collection("suggestions")
      .delete(suggestionId);
    //  will be a boolean value  "true" if deleted successfully
    return deletedSuggestion;
  } catch (error) {
    console.log(error);
  }
};

export { CreateUserSuggestion, UpdateUserSuggestion, DeleteUserSuggestion };
