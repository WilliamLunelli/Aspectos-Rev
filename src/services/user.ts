import { User } from "../../types/user";

export const findUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (email === "admin@hotmail.com" && password === "1234") {
    const user = {
      id: "2",
      name: "Fulano",
    };
    return user;
  }

  return null;
};

export const createUserToken = (user: User) => {
  return "1234";
};
