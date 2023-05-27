import { makeAutoObservable } from "mobx";
import { networkStore } from "shared/networkStore";
import { User } from "../../domain";
import { IUserStore } from "../../application/ports";

const emptyUser: User = {
  id: "",
  email: "",
  name: "",
  role: "reader",
};

export const userStore = makeAutoObservable<IUserStore>({
  ...networkStore,

  user: emptyUser,

  saveUser(user) {
    this.user = user;
  },

  resetUser() {
    this.user = emptyUser;
  },
});
