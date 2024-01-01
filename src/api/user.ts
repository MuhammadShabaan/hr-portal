import Pocketbase from "pocketbase";
import useSWR from "swr";

const pb = new Pocketbase("http://127.0.0.1:8090");

const UserLogin = async (data: any): Promise<any> => {
  const user = await pb
    .collection("users")
    .authWithPassword(data.email, data.password)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("Error while logging in ", error);
    });
  return user;
};

//<====================================== Get Requests ======================================>//

const GetUserCertificates = async (): Promise<any> => {
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8090/api/collections/certificates/records",
    fetcher
  );
  return { data, error, isLoading };
};

//<====================================== Create Requests ======================================>//

const UpdateUserInfo = async (userId: any, data: any): Promise<any> => {
  const updatedUser = await pb
    .collection("users")
    .update(userId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("Erro while updating user information", error);
    });
  return updatedUser;
};

const CreateUserSuggestion = async (data: any): Promise<any> => {
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

const CreateUserRequest = async (data: any): Promise<any> => {
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

const CreateCertRequest = async (data: any): Promise<any> => {
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

const CreateUserAllowance = async (data: any): Promise<any> => {
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

const DeleteUser = async (userId: any): Promise<any> => {
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

const DeleteCertificate = async (certificateId: any): Promise<any> => {
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

const DeleteUserPayslip = async (payslipId: any): Promise<any> => {
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

const DeleteUserSuggestion = async (suggestionId: any): Promise<any> => {
  const deletedSuggestion = await pb
    .collection("suggestions")
    .delete(suggestionId)
    .then((result) => {
      if (result === null) {
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

const DeleteUserAllowance = async (allowanceId: any): Promise<any> => {
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

const DeleteUserRequest = async (requestId: any): Promise<any> => {
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

const UpdateSuggestion = async (suggestionId: any, data: any): Promise<any> => {
  const updatedSuggestion = await pb
    .collection("suggestions")
    .update(suggestionId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(
        `While while updating suggestion with id:${suggestionId}`,
        error
      );
    });
  return updatedSuggestion;
};

const UpdateUserAllowance = async (
  allowanceId: any,
  data: any
): Promise<any> => {
  const updatedAllowance = await pb
    .collection("user_allowances")
    .update(allowanceId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(
        `While while updating allowance with id:${allowanceId}`,
        error
      );
    });
  return updatedAllowance;
};

const UpdateUserRequest = async (requestId: any, data: any): Promise<any> => {
  const updatedRequest = await pb
    .collection("user_requests")
    .update(requestId, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(`While while updating request with id:${requestId}`, error);
    });
  return updatedRequest;
};

export {
  UserLogin,
  GetUserCertificates,
  CreateUserSuggestion,
  CreateUserRequest,
  UpdateUserInfo,
  CreateCertRequest,
  CreateUserAllowance,
  DeleteUser,
  DeleteCertificate,
  DeleteUserPayslip,
  DeleteUserSuggestion,
  DeleteUserAllowance,
  DeleteUserRequest,
  UpdateSuggestion,
  UpdateUserAllowance,
  UpdateUserRequest,
};
