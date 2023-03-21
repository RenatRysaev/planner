import { Router, Switch, Route } from "react-router";
import { SignInPage } from "./features/user/ui";
import { TeamPage } from "./features/team/ui";

import { history } from "./navigate";

export const RouterMy = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <TeamPage />
        </Route>
        <Route exact path="/sign-in">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
};
