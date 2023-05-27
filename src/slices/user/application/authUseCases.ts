import { userApi, userStore } from "../services";
import { IUserApi, IUserStore } from "./ports";
import { INavigate } from "shared/ports";
import { navigate } from "../../../navigate";

export class AuthUseCases {
  private userStore: IUserStore;
  private userApi: IUserApi;
  private navigate: INavigate;

  constructor({
    dependencies,
  }: {
    dependencies: {
      userStore: IUserStore;
      userApi: IUserApi;
      navigate: INavigate;
    };
  }) {
    this.userStore = dependencies.userStore;
    this.userApi = dependencies.userApi;
    this.navigate = dependencies.navigate;
  }

  public signIn = async () => {
    try {
      this.userStore.setIsLoading(true);

      const user = await this.userApi.signIn();
      this.userStore.saveUser(user);

      this.navigate.push("/");
    } catch (error) {
      this.userStore.setLoadingError(String(error));
      console.error("sign in error:", error);
    } finally {
      this.userStore.setIsLoading(false);
    }
  };
}

export const authUseCases = new AuthUseCases({
  dependencies: { userStore, userApi, navigate },
});
