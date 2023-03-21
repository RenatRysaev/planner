import { createBrowserHistory } from "history";
import { INavigate } from "./shared/ports";

export const history = createBrowserHistory();

export const navigate: INavigate = {
  push: history.push,
};
