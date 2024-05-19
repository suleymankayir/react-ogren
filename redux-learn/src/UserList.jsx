import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/userSlice";
import User from "./redux/User";

function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { users } = useSelector((store) => store.user);

  return (
    <div>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
}

export default UserList;
