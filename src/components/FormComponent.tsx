import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthDataModel } from "../models/AuthDataModel";
import { authService } from "../services/api.service";

const FormComponent = () => {
  const { handleSubmit, register } = useForm<AuthDataModel>({
    defaultValues: { username: "userSZ1", password: "P@$$word1" },
  });

  const [isAuthState, setIsAuthState] = useState<boolean>(false);

  const authenticate = async (formData: AuthDataModel) => {
    const isAuth = await authService.authentication(formData);
    setIsAuthState(isAuth);
  };

  return (
    <div>
      <h3>Login Form</h3>
      <div>{isAuthState ? <span>ok</span> : <span>not ok</span>}</div>
      <form onSubmit={handleSubmit(authenticate)}>
        <input {...register("username")} />
        <input {...register("password")} />
        <button>Auth</button>
      </form>
    </div>
  );
};

export default FormComponent;
