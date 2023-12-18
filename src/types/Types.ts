export interface User {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  name: string;
  nic: string;
  address: string;
  phone: string;
  emergency_phone: string;
  pay: string;
  joining_date: string;
  employee_status: string;
  job_type: string;
  blood_group: string;
  roles: string;
}

export interface UsersList {
  data: User[];
}

export interface LoginFormInterface {
  email: string;
  password: string;
}

export interface SettingValue {}

export interface LogOutUser {
  logOutUser: () => void;
}
