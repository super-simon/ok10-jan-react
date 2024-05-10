import UsersComponent from "./components/UsersComponent";

const App = () => {
  const lift = (user: any) => {
    console.log(user);
  };
  return (
    <>
      <UsersComponent lift={lift} />
    </>
  );
};

export default App;
