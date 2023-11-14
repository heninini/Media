import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-Thunk";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function UserList() {
  const [doFetchUsers, isLoadingUser, isLoadingError] = useThunk(fetchUsers);

  const [doCreateUsers, createingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUsers();
  };

  if (isLoadingUser) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (isLoadingError) {
    return <div>Error fetching data ...</div>;
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

          {createingUser ? (
            "Creating User"
          ) : (
            <Button onClick={handleAddUser}>+ Add User</Button>
          )}
          {creatingUserError && "error creating a user"}
        </div>
        {renderedUser}
      </div>
    );
  }
  return;
}
export default UserList;
