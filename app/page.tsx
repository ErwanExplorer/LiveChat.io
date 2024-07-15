import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";
import "@liveblocks/react-ui/styles.css";

export default function Page() {
  return (
    <Room>
      <CollaborativeApp />
    </Room>
  );
}