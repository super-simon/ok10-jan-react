import { useEffect } from "react";
import UsersComponent from "../components/UsersComponent";
import { userActions } from "../redux/slices/userSlice";
import { useAppDispatch } from "../redux/store";

const UsersPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.loadUsers());
  }, []);
  return (
    <div>
      <UsersComponent />
    </div>
  );
};

export default UsersPage;
