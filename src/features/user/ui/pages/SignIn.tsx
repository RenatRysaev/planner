import { observer } from "mobx-react-lite";
import { authUseCases } from "../../useCases";
import { userStore } from "../../services";

export const SignIn = observer(() => {
  console.log("userStore", userStore.user.email);

  const handleChangeSomeState = () => {
    console.log("handleChangeSomeState");
    void authUseCases.signIn();
  };

  return (
    <>
      <div>
        {userStore.user.email
          ? `User state is ready: ${userStore.user.email}`
          : "User state is empty"}
      </div>
      <button onClick={handleChangeSomeState}>Change some state</button>
    </>
  );
});
