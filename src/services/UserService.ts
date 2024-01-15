import {
  CreateAllowance,
  CreateCertificate,
  CreateRequest,
  CreateSuggestion,
  Login,
  // UpdateUserRequest,
  UpdateSuggestion,
  UpdateUser,
} from "@/types/Types";

import Pocketbase, { RecordAuthResponse, RecordModel } from "pocketbase";


const API_BASE_URL= import.meta.env.VITE_API_BASE_URL
console.log(`Hello---${API_BASE_URL}`)
const pb = new Pocketbase("http://127.0.0.1:8090");

//<====================================== User Authentication ======================================>//

// const UserLogin = async (
//   data: Login
// ): Promise<RecordAuthResponse<RecordModel> | void> => {
//   const user = await pb
//     .collection("users")
//     .authWithPassword(data.email, data.password)
//     .then((result) => {
//       return result;
//     })
//     .catch((error) => {
//       console.log("Error while logging in ", error);
//     });
//   return user;
// };

//<====================================== Create Requests ======================================>//

const CreateUserSuggestion = async (
  data: CreateSuggestion
): Promise<RecordModel | void> => {
  const suggestion = await pb
    .collection("suggestions")
    .create(data)
    .then((reuslt) => {
      return reuslt;
    })
    .catch((error) => {
      console.log("Error while creating suggestion", error);
    });
  return suggestion;
};

const CreateUserRequest = async (
  data: CreateRequest
): Promise<RecordModel | void> => {
  const request = await pb
    .collection("user_requests")
    .create(data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("Error while create request", error);
    });
  return request;
};

const CreateUserCertificate = async (
  data: CreateCertificate
): Promise<RecordModel | void> => {
  const certificate = await pb
    .collection("certificates")
    .create(data)
    .then((result) => {
      return result;
    })
    .catch((error) =>
      console.log("Error while creating certificate request", error)
    );
  return certificate;
};

const CreateUserAllowance = async (
  data: CreateAllowance
): Promise<RecordModel | void> => {
  const allowance = await pb
    .collection("user_allowances")
    .create(data)
    .then((result) => {
      return result;
    })
    .catch((error) =>
      console.log("Error while creating allowance request", error)
    );
  return allowance;
};

//<====================================== Delete Requests ======================================>//

const DeleteUser = async (
  userId: string
): Promise<string | void | undefined> => {
  const deletedUser = await pb
    .collection("users")
    .delete(userId)
    .then((result) => {
      if (result === null) {
        return `User with id:${userId} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the user of id:${userId}`, error);
    });
  return deletedUser;
};

const DeleteCertificate = async (
  certificateId: string
): Promise<string | void | undefined> => {
  const deletedCertifcate = await pb
    .collection("certificates")
    .delete(certificateId)
    .then((result) => {
      if (result === null) {
        return `Certificate with id:${certificateId} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(
        `Error while deleting the certificate of id:${certificateId}`,
        error
      );
    });
  return deletedCertifcate;
};

const DeleteUserPayslip = async (
  payslipId: string
): Promise<string | void | undefined> => {
  const deletedPayslip = await pb
    .collection("payslips")
    .delete(payslipId)
    .then((result) => {
      if (result === null) {
        return `Payslip with id:${payslipId} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the payslip of id:${payslipId}`, error);
    });
  return deletedPayslip;
};

const DeleteUserSuggestion = async (
  suggestionId: string
): Promise<string | void | undefined> => {
  const deletedSuggestion = await pb
    .collection("suggestions")
    .delete(suggestionId)
    .then((result) => {
      if (result === null || result === undefined) {
        return `Suggestion with id:${suggestionId} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(
        `Error while deleting the suggestion of id:${suggestionId}`,
        error
      );
    });
  return deletedSuggestion;
};

const DeleteUserAllowance = async (
  allowanceId: string
): Promise<string | void | undefined> => {
  const deletedAllowance = await pb
    .collection("user_allowances")
    .delete(allowanceId)
    .then((result) => {
      if (result === null) {
        return `Allowance with id:${allowanceId} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(
        `Error while deleting the allowance of id:${allowanceId}`,
        error
      );
    });
  return deletedAllowance;
};

const DeleteUserRequest = async (
  requestId: string
): Promise<string | void | undefined> => {
  const deletedRequest = await pb
    .collection("user_requests")
    .delete(requestId)
    .then((result) => {
      if (result === null) {
        return `Request with id:${requestId} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the request of id:${requestId}`, error);
    });

  return deletedRequest;
};

//<====================================== Update Requests ======================================>//

const UpdateUserInfo = async (
  userId: string,
  data: UpdateUser
): Promise<RecordModel | void> => {
  const updatedUser = await pb
    .collection("users")
    .update(userId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("Error while updating user information", error);
    });
  return updatedUser;
};

const UpdateUserSuggestion = async (
  suggestionId: string,
  data: UpdateSuggestion
): Promise<RecordModel | void> => {
  const updatedSuggestion = await pb
    .collection("suggestions")
    .update(suggestionId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(
        `Error while updating suggestion with id:${suggestionId}`,
        error
      );
    });
  return updatedSuggestion;
};

const UpdateUserAllowance = async (
  allowanceId: string,
  data: any
): Promise<RecordModel | void> => {
  const updatedAllowance = await pb
    .collection("user_allowances")
    .update(allowanceId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(
        `Error while updating allowance with id:${allowanceId}`,
        error
      );
    });
  return updatedAllowance;
};

const UpdateUserRequest = async (
  requestId: string,
  data: any
): Promise<RecordModel | void> => {
  const updatedRequest = await pb
    .collection("user_requests")
    .update(requestId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(`Error while updating request with id:${requestId}`, error);
    });

  return updatedRequest;
};

const UpdateUserCertificate = async (
  certificateId: string,
  data: any
): Promise<RecordModel | void> => {
  const updatedCertificate = await pb
    .collection("certificates")
    .update(certificateId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(
        `Error while updating certificate with id:${certificateId}`,
        error
      );
    });
  return updatedCertificate;
};

export {
  UserLogin,
  CreateUserSuggestion,
  CreateUserRequest,
  CreateUserCertificate,
  CreateUserAllowance,
  DeleteUser,
  DeleteCertificate,
  DeleteUserPayslip,
  DeleteUserSuggestion,
  DeleteUserAllowance,
  DeleteUserRequest,
  UpdateUserInfo,
  UpdateUserSuggestion,
  UpdateUserAllowance,
  UpdateUserRequest,
  UpdateUserCertificate,
};
