import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/currentProfile";
import { ChatHeader } from "@/components/chat/ChatHeader";

import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessages } from "@/components/chat/ChatMessages";

import { MediaRoom } from "@/components/MediaRoom";

import { db } from "@/lib/database";

const AIIdPage = async ({ params }) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.aiId,
    },
  });

  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  });

  if (!channel || !member) {
    redirect("/");
  }
  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full w-full">
      <ChatHeader
        name={channel.name}
        serverId={channel.serverId}
        type="channel"
      />
      {channel.type === "GPT" && (
        <ChatInput
          name={channel.name}
          type="channel"
          apiUrl="/api/socket/ai"
          query={{
            channelId: channel.id,
            serverId: channel.serverId,
          }}
        />
      )}
    </div>
  );
};

export default AIIdPage;
