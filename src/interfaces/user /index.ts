import { TRoles } from "../roles";

export interface IUser {
  password: string;
  role: TRoles;
  userId: string;
  userName: string;
}
