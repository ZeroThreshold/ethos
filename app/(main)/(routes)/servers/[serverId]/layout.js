import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { initProfile } from "@/lib/init-profile";
import { db } from "@/lib/database";
import ServerSidebar from "@/components/server/ServerSidebar";

const ServerIdLayout = async ({ children, params }) => {
  const profile = await initProfile();
  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="h-full flex">
      <div className="hidden md:flex h-full w-60 z-20 flex-col">
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
