import { joiResolver } from "@hookform/resolvers/joi";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { userValidator } from "../validators/user.validator";

interface IFormProps {
  username: string;
  age: number;
  password: string;
}

const FormComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({
    mode: "all",
    resolver: joiResolver(userValidator),
  });

  const save = (formValues: IFormProps) => {
    console.log(formValues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <input type="text" {...register("username")} />
        {errors.username && <span>{errors.username.message}</span>}
        <br />
        <input type="number" {...register("age")} />
        {errors.age && <span>{errors.age.message}</span>}
        <br />
        <input type="text" {...register("password")} />
        <button>save</button>
      </form>
    </div>
  );
};

export default FormComponent;
