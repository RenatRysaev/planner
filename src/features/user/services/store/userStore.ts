import { makeAutoObservable } from "mobx";
import { User } from "../../domain";

export interface IUserStore {
  user: User;
  saveUser: (user: User) => void;
  resetUser: () => void;
}

const emptyUser: User = {
  id: "",
  email: "",
  name: "",
  surname: "",
  role: "reader",
};

// export const UserStore: IUserStore = {
//   user: observable(emptyUser),
//
//   saveUser: action(function (user) {
//     this.user = user;
//   }),
//
//   resetUser: action(function () {
//     this.user = emptyUser;
//   }),
// };

export class UserStore implements IUserStore {
  user: User;

  constructor() {
    this.user = emptyUser;
    makeAutoObservable(this);
  }

  saveUser(user: User) {
    this.user = user;
  }

  resetUser() {
    this.user = emptyUser;
  }
}

export const userStore = new UserStore();
