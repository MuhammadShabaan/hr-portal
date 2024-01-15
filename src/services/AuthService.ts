// TODO :Apply proper validations here
import pb from "./PocketBase";
import { RecordAuthResponse, RecordModel } from "pocketbase";

export async function login(email: string, password: string): Promise<RecordAuthResponse<RecordModel> | void> {
    try {
        const user = await pb.collection("users").authWithPassword(email, password)
        return user

    } catch (error) {
        console.log(error)
    }
}

export function logout(): void {
    pb.authStore.clear();
}

export async function resetPassword(email: string): Promise<void> {
        await pb.collection("users").requestPasswordReset(email)
}

export async function setNewPassword(token:string, newPassword:string, newPasswordConfirm:string): Promise<RecordAuthResponse<RecordModel> | void>{
     await pb.collection('users').confirmPasswordReset(token,newPassword,newPasswordConfirm)
}

