import { IUserMock } from "../interfaces/user ";

export const mockedUsers: IUserMock[] = [
  {
    password: "Test123@",
    role: ["user"],
    userName: "userTest",
    userId: 1,
  },
  {
    password: "Test123@",
    role: ["admin"],
    userName: "adminTest",
    userId: 2,
  },
];
