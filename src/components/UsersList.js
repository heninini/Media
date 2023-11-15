import { fetchUsers, addUser, removeUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-Thunk";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserListItem from "./UserListItem";

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

  let content;

  if (isLoadingUser) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (isLoadingError) {
    content = <div>Error fetching data ...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });

    if (data) {
      return (
        <div>
          <div className="flex flex-row justify-between item-center m-3">
            <h1 className="m-2 text-xl">User</h1>
            <Button loading={createingUser} onClick={handleAddUser}>
              + Add User
            </Button>
            {creatingUserError && "error creating a user"}
          </div>
          {content}
        </div>
      );
    }
  }
}
export default UserList;
