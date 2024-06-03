import { useEffect, useMemo, useState } from "react";
import { useContextProvider } from "../context/ContextProvider";
import { UserWithPostsType } from "../models/UserWithPostsType";

const UserPostsComponent = () => {
  const {
    usersStore: { allUsers },
    postsStore: { allPosts },
  } = useContextProvider();

  const [usersWithPosts, setUsersWithPosts] = useState<UserWithPostsType[]>([]);

  const userWithPostsArray = useMemo(() => {
    return () => {
      allUsers.map((user) => {
        const posts = allPosts.filter((post) => post.userId == user.id);
        const newUser = {
          ...user,
          posts,
        };

        return newUser;
      });
    };
  }, [allPosts, allUsers]);

  useEffect(() => {
    setUsersWithPosts(userWithPostsArray);
  }, [userWithPostsArray]);

  return (
    <div>
      {usersWithPosts.map((user) => (
        <div key={user.id}>
          <ul>
            {user.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserPostsComponent;
