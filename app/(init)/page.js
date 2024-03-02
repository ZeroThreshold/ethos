import ListServersMain from "@/components/main/listServersMain";
import { db } from "@/lib/database";
import { initProfile } from "@/lib/init-profile";

const InitPage = async () => {
  const profile = await initProfile();

  const listofservers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return <ListServersMain servers={listofservers} />;
};

export default InitPage;
