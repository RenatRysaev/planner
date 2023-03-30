import { Router as ReactRouter, Switch, Route } from "react-router";
import { SignInPage } from "slices/user/ui";
import { TeamPage } from "slices/team/ui";

import { history } from "./navigate";

export const Router = () => {
  return (
    <ReactRouter history={history}>
      <Switch>
        <Route exact path="/">
          <TeamPage />
        </Route>
        <Route exact path="/sign-in">
          <SignInPage />
        </Route>
      </Switch>
    </ReactRouter>
  );
};
