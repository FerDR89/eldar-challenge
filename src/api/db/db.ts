import { IUserMock } from "../../interfaces/user ";

export const mockedUsers: IUserMock[] = [
  {
    password: "Test123@",
    role: ["user"],
    userId: "user@test.com",
  },
  {
    password: "Test123@",
    role: ["admin"],
    userId: "admin@test.com",
  },
  {
    password: "Test123@",
    role: ["admin", "user"],
    userId: "userAdmin@test.com",
  },
];
