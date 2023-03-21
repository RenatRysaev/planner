import { User } from "../domain";

export interface IUserStore {
  user: User;
  saveUser: (user: User) => void;
  resetUser: () => void;
}

export interface IUserApi {
  signIn: () => Promise<User>;
}
