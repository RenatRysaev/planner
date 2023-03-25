import { Router as ReactRouter, Switch, Route } from "react-router";
import { SignInPage } from "features/user/ui";
import { TeamPage } from "features/team/ui";

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
