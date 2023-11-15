import { useThunk } from "../hooks/use-Thunk.js";
import { removeUser } from "../store";
import { IoTrashOutline } from "react-icons/io5";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel.js";
import AlbumsList from "./AlbumsList.js";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleRemove = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button onClick={handleRemove} loading={isLoading}>
        <IoTrashOutline />
      </Button>
      {user.name}
      {error && " error deleting"}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
export default UserListItem;
