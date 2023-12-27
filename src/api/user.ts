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
  console.log("here==>");
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8090/api/collections/certificates/records",
    fetcher
  );
  console.log("data in swr--->", data, error);
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

//<====================================== Delete Requests ======================================>//

const DeleteUser = async (id: any): Promise<any> => {
  const deletedUser = await pb
    .collection("users")
    .delete(id)
    .then((result) => {
      if (result === null) {
        return `User with id:${id} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the user of id:${id}`, error);
    });
  return deletedUser;
};

const DeleteCertificate = async (id: any): Promise<any> => {
  const deletedCertifcate = await pb
    .collection("certificates")
    .delete(id)
    .then((result) => {
      if (result === null) {
        return `Certificate with id:${id} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the certificate of id:${id}`, error);
    });
  return deletedCertifcate;
};

const DeletePayslip = async (id: any): Promise<any> => {
  const deletedPayslip = await pb
    .collection("payslips")
    .delete(id)
    .then((result) => {
      if (result === null) {
        return `Payslip with id:${id} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the payslip of id:${id}`, error);
    });
  return deletedPayslip;
};

const DeleteSuggestion = async (id: any): Promise<any> => {
  const deletedSuggestion = await pb
    .collection("payslips")
    .delete(id)
    .then((result) => {
      if (result === null) {
        return `Suggestion with id:${id} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the suggestion of id:${id}`, error);
    });
  return deletedSuggestion;
};

const DeleteUserAllowance = async (id: any): Promise<any> => {
  const deletedAllowance = await pb
    .collection("user_allowances")
    .delete(id)
    .then((result) => {
      if (result === null) {
        return `Allowance with id:${id} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the allowance of id:${id}`, error);
    });
  return deletedAllowance;
};

const DeleteUserRequest = async (id: any): Promise<any> => {
  const deletedRequest = await pb
    .collection("user_requests")
    .delete(id)
    .then((result) => {
      if (result === null) {
        return `Request with id:${id} deleted successfully!`;
      }
    })
    .catch((error) => {
      console.log(`Error while deleting the request of id:${id}`, error);
    });
  return deletedRequest;
};

//<====================================== Update Requests ======================================>//

const UpdateSuggestion = async (id: any, data: any): Promise<any> => {
  const updatedSuggestion = await pb
    .collection("suggestions")
    .update(id, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(`While while updating suggestion with id:${id}`, error);
    });
  return updatedSuggestion;
};

const UpdateUserAllowance = async (id: any, data: any): Promise<any> => {
  const updatedAllowance = await pb
    .collection("user_allowances")
    .update(id, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(`While while updating allowance with id:${id}`, error);
    });
  return updatedAllowance;
};

const UpdateUserRequest = async (id: any, data: any): Promise<any> => {
  const updatedRequest = await pb
    .collection("user_requests")
    .update(id, data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(`While while updating request with id:${id}`, error);
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
  DeleteUser,
  DeleteCertificate,
  DeletePayslip,
  DeleteSuggestion,
  DeleteUserAllowance,
  DeleteUserRequest,
  UpdateSuggestion,
  UpdateUserAllowance,
  UpdateUserRequest,
};
