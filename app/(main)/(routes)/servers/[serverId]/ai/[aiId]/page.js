import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/currentProfile";
import { ChatHeader } from "@/components/chat/ChatHeader";

import { ChatInput } from "@/components/chat/ChatInput";

import { db } from "@/lib/database";

import ReactMarkdown from "react-markdown";

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

  const aimessages = await db.GPT.findMany({
    where: {
      channelId: params.aiId,
      serverId: params.serverId,
    },
    orderBy: [
      {
        idx: "desc",
      },
    ],
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
      {aimessages.map((message) => {
        return (
          <>
            <div className="w-full px-4 py-2" key={message.id}>
              <div className="bg-neutral-200 p-4 rounded">
                <div>Question: {message.question}</div>
                <div
                  className={
                    message.answer ? "text-green-700" : "text-gray-500"
                  }
                >
                  Answer:{" "}
                  {message.answer ? (
                    <ReactMarkdown>{message.answer}</ReactMarkdown>
                  ) : (
                    "Generating Response....."
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AIIdPage;
