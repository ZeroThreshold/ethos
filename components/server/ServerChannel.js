"use client";

import { Edit, Boxes, Lock, Mic, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "../ActionToolTip";
import { useModelStore } from "@/hooks/useModelStore";

const iconMap = {
  ["TEXT"]: Boxes,
  ["VOICE"]: Mic,
};

export const ServerChannel = ({ channel, server, role }) => {
  const { onOpen } = useModelStore();
  const params = useParams();
  const router = useRouter();

  const Icon = iconMap[channel.type];

  const onClick = () => {
    router.push(`/servers/${params?.serverId}/channels/${channel.id}`);
  };

  const checkTr =
    channel.name === "general" ||
    channel.name === "g-whiteboard" ||
    channel.name === "AI1" ||
    channel.name === "editor" ||
    channel.name === "voice";

  const onAction = (e, action) => {
    e.stopPropagation();
    onOpen(action, { channel, server });
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.channelId === channel.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {channel.name}
      </p>
      {checkTr && role !== "USER" && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Delete">
            <Trash
              onClick={(e) => onAction(e, "deleteChannel")}
              className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
        </div>
      )}
      {checkTr && (
        <Lock className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400" />
      )}
    </button>
  );
};
