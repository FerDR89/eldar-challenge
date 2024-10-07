import { TRoles } from "../roles";

export interface IUser {
  role: TRoles[];
  userName: string;
  userId: number;
}

export interface IUserMock extends IUser {
  password: string;
}
