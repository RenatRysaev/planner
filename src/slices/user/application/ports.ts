import { User } from "../domain";
import { INetworkStore } from "shared/ports";

export type IUserStore = {
  user: User;
  saveUser: (user: User) => void;
  resetUser: () => void;
} & INetworkStore;

export type IUserApi = {
  signIn: () => Promise<User>;
};
