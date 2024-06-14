import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userActions } from "../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.userSlice);

  useEffect(() => {
    dispatch(userActions.loadUserById(id));
  }, [id]);
  return <div>{user && `${user.name} (${user.email})`}</div>;
};

export default UserPage;
