import { useThunk } from "../hooks/use-Thunk.js";
import { removeUser } from "../store";
import { IoTrashOutline } from "react-icons/io5";
import Button from "./Button";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleRemove = () => {
    doRemoveUser(user);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button onClick={handleRemove} loading={isLoading}>
          <IoTrashOutline />
        </Button>
        {user.name}
        {error && "  error deleting ...."}
      </div>
    </div>
  );
}
export default UserListItem;
