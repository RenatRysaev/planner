import { User } from "../../domain";

export interface IUserApi {
  signIn: () => Promise<User>;
}

export const userApi: IUserApi = {
  signIn: () =>
    new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve({
          id: "1",
          email: "vasyapupkin@gmail.com",
          name: "Vasya",
          surname: "Pupkin",
          role: "reader",
        });
      }, 1000);
    }),
};
