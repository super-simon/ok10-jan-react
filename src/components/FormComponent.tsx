import { FC, FormEvent, useState } from "react";

interface IFormProps {
  username: string;
  password: string;
}

const FormComponent: FC = () => {
  const [formState, setFormState] = useState<IFormProps>({
    username: "default",
    password: "default",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleUsernameChange = (e: FormEvent<HTMLInputElement>): void => {
    const input = e.currentTarget;
    setFormState({ ...formState, username: input.value });
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>): void => {
    const input = e.currentTarget;
    setFormState({ ...formState, password: input.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          name="password"
          value={formState.password}
          onChange={handlePasswordChange}
        />
        <button>save</button>
      </form>
    </div>
  );
};

export default FormComponent;
