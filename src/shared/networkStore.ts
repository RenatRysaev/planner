import { INetworkStore } from "./ports";

export const networkStore: INetworkStore = {
  isLoading: false,
  loadingError: "",

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  },

  setLoadingError(error) {
    this.loadingError = error;
  },
};
