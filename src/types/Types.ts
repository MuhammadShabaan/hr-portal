export interface Login {
  email: string;
  password: string;
}

export interface SettingValue {}

export interface LogOutUser {
  logOutUser: () => void;
}

//<====================================== Fetching Data ======================================>//

export interface User {
  address: string;
  avatar: string;
  blood_group: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  emergency_phone: string;
  employee_status: string;
  id: string;
  job_type: "part time" | "full time";
  joining_date: string;
  name: string;
  nic: string;
  pay: string;
  phone: string;
  roles: "manager" | "admin" | "employee";
  updated: string;
  username: string;
  verified: boolean;
}

export interface UserCertificate {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  type: "certificate" | "letter";
  requested_by: string;
  user_email: string;
}

export interface UserSuggestion {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  type: "complain" | "suggestion";
  user_id: string;
  description: string;
  response: string;
  suggested_by: string;
  user_email: string;
}

export interface UserPayslip {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  basic_pay: number;
  allowance: number;
}

export interface UserAllowance {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  user_id: string;
  status: "requested" | "approved" | "archived" | "rejected";
  allowance_amount: number;
  recurring: boolean;
  description: string;
  requested_by: string;
  user_email: string;
}

export interface UserRequest {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  user_id: string;
  request_type: "leave" | "short leave" | "allowance" | "work from home";
  status: "pending" | "accepted" | "declined";
  description: string;
  note: string;
  requested_by: string;
  user_email: string;
}

//<====================================== Create Data ======================================>//

export interface CreateCertificate {
  title: string;
  type: "certificate" | "letter";
  requested_by: string;
  user_email: string;
}

export interface CreateAllowance {
  allowance_amount: number;
  user_id: string;
  requested_by: string;
  status: "requested";
  description: string;
  user_email: string;
}

export interface CreateSuggestion {
  user_id: string;
  description: string;
  type: "complain" | "suggestion";
  suggested_by: string;
  user_email: string;
}

export interface CreateRequest {
  user_id: string;
  requested_by: string;
  user_email: string;
  request_type: "leave" | "short leave" | "allowance" | "work from home";
  description: string;
  status: "pending";
}

//<====================================== Update Data ======================================>//

export interface UpdateUser {
  username: string;
  name: string;
  nic: string;
  address: string;
  phone: string;
  emergency_phone: string;
  blood_group: string;
  avatar?: string;
}

export interface UpdateSuggestion {
  response: string;
}

export interface UpdateRequest {
  status: "pending" | "accepted" | "declined";
  note: string;
}
