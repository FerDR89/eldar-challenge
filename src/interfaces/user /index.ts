import { TRoles } from "../roles";

export interface IUser {
  role: TRoles[];
  userId: string;
}

export interface IUserMock extends IUser {
  password: string;
}
