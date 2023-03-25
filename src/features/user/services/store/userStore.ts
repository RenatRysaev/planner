import { makeAutoObservable } from "mobx";
import { User } from "../../domain";
import { IUserStore } from "../../application/ports";
import { networkStore } from "../../../../shared/networkStore";

const emptyUser: User = {
  id: "",
  email: "",
  name: "",
  surname: "",
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
