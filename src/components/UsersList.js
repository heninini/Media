import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { addUser } from "../store";

function UserList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser());
  };
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (error) {
    return <div>error fetching data ...</div>;
  }
  const renderedUser = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  if (data) {
    return (
      <div>
        <div className="flex flex-row justify-between m-3">
          <h1 className="m-2 text-xl">User</h1>

          <Button onClick={handleAddUser}>+ Add User</Button>
        </div>
        {renderedUser}
      </div>
    );
  }
  return;
}
export default UserList;
