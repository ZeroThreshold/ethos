import { redirect } from "next/navigation";
import { Boxes, Mic, ShieldAlert, ShieldCheck, Video } from "lucide-react";

import { ScrollArea } from "../ui/scroll-area";
import { redirectToSignIn } from "@clerk/nextjs";
import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/database";

import ServerHeader from "./ServerHeader";
import { ServerSection } from "./ServerSection";
import { ServerChannel } from "./ServerChannel";
import { ServerMember } from "./ServerMember";
import { ServerWhiteChannel } from "./ServerWhiteBoardChannel";

const iconMap = {
  ["TEXT"]: <Boxes className="mr-2 h-4 w-4" />,
  ["VOICE"]: <Mic className="mr-2 h-4 w-4" />,
};

const roleIconMap = {
  ["USER"]: null,
  ["MOD"]: <ShieldCheck className="h-4 w-4 mr-2 text-indigo-500" />,
  ["ADMIN"]: <ShieldAlert className="h-4 w-4 mr-2 text-rose-500" />,
};

const ServerSidebar = async ({ serverId }) => {
  const profile = await currentProfile();
  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        orderBy: {
          createdAt: "asc",
        },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  const textChannels = server?.channels.filter(
    (channel) => channel.type === "TEXT"
  );
  const audioChannels = server?.channels.filter(
    (channel) => channel.type === "VOICE"
  );
  const whiteBoardChannels = server?.channels.filter(
    (channel) => channel.type === "WHITEBOARD"
  );
  const codeBoard = server?.channels.filter(
    (channel) => channel.type === "CODE"
  );
  const members = server?.members.filter(
    (member) => member.profileId !== profile.id
  );

  if (!server) {
    return redirect("/");
  }

  const role = server.members.find(
    (member) => member.profileId === profile.id
  )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ServerHeader server={server} role={role} />
      <ScrollArea className="flex-1  px-3">
        {!!textChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={"TEXT"}
              role={role}
              label="Threads"
            />
            <div className="space-y-[2px]">
              {textChannels.map((channel) => (
                <ServerChannel
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
        {!!whiteBoardChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={"WHITEBOARD"}
              role={role}
              label="Whiteboard"
            />
            <div className="space-y-[2px]">
              {whiteBoardChannels.map((board) => (
                <ServerWhiteChannel
                  key={board.id}
                  channel={board}
                  role={role}
                  server={server}
                  name={profile.name}
                />
              ))}
            </div>
          </div>
        )}
        {!!audioChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={"VOICE"}
              role={role}
              label="Media Channel"
            />
            <div className="space-y-[2px]">
              {audioChannels.map((channel) => (
                <ServerChannel
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
        {!!members?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="members"
              role={role}
              label="Members"
              server={server}
            />
            <div className="space-y-[2px]">
              {members.map((member) => (
                <ServerMember key={member.id} member={member} server={server} />
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ServerSidebar;
