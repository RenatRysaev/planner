import { observer } from "mobx-react-lite";
import { authUseCases } from "../../application";

export const SignInPage = observer(() => {
  const auth = () => {
    void authUseCases.signIn();
  };

  return <button onClick={auth}>Sign In</button>;
});
