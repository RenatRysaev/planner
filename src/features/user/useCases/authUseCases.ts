import {
  UserStore,
  IUserStore,
  userApi,
  IUserApi,
  userStore,
} from "../services";

export class AuthUseCases {
  private userStore: UserStore;
  private userApi: IUserApi;

  constructor({
    dependencies,
  }: {
    dependencies: { userStore: IUserStore; userApi: IUserApi };
  }) {
    this.userStore = dependencies.userStore;
    this.userApi = dependencies.userApi;
  }

  public signIn = async () => {
    const user = await this.userApi.signIn();
    this.userStore.saveUser(user);
  };
}

export const authUseCases = new AuthUseCases({
  dependencies: { userStore, userApi },
});
