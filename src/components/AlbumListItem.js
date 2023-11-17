import { IoTrashOutline } from "react-icons/io5";
import { useDeleteAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

export default function AlbumListItem({ album }) {
  const header = <div>{album.title}</div>;
  const [deleteAlbum, response] = useDeleteAlbumMutation();

  const handleRemove = () => {
    deleteAlbum(album);
  };
  return (
    <div>
      <Button
        className="mr-2 items-center"
        loading={response.isLoading}
        onClick={handleRemove}
      >
        <IoTrashOutline />
      </Button>
      <ExpandablePanel header={header}>
        List of photos in the album
      </ExpandablePanel>
    </div>
  );
}
