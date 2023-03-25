type To = string;

export type INavigate = {
  push: (to: To) => void;
};

export type NetworkStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  loadingError?: string;
  setLoadingError: (error: string) => void;
};
