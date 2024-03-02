import { Boxes } from "lucide-react";

import { MobileToggle } from "../MobileToggle";
import { SocketIndicator } from "../SocketIndicatior";

export const ChatHeader = ({ serverId, name, type, imageUrl }) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Boxes className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
      <div className="flex items-center ml-4">
        <SocketIndicator />
      </div>
    </div>
  );
};
