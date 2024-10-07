import { IUserMock } from "../../interfaces/user ";

export const mockedUsers: IUserMock[] = [
  {
    password: "Test123@",
    role: ["user"],
    userName: "user@test.com",
    userId: 1,
  },
  {
    password: "Test123@",
    role: ["admin"],
    userName: "admin@test.com",
    userId: 2,
  },
];
