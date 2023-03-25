import { makeAutoObservable } from "mobx";
import { User } from "../../domain";
import { IUserStore } from "../../application/ports";

const emptyUser: User = {
  id: "",
  email: "",
  name: "",
  surname: "",
  role: "reader",
};

class UserStore implements IUserStore {
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
