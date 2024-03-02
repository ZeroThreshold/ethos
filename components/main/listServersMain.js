"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { InitModal } from "../modals/InitModal";
import { useState } from "react";

const ListServersMain = ({ servers }) => {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <>
      <div className="h-full">
        <div className="w-full py-6 flex flex-col items-center pt-10 container">
          <div className="flex justify-between gap-2 w-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome to the Community
              </h1>
              <span className="font-base">
                Here you can find the your groups
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={() => setModelOpen(true)}>Create Group +</Button>
            </div>
          </div>
          <div className="grid w-full gap-4 py-10">
            {servers.length === 0 && (
              <div className="w-full flex justify-center items-center pt-10 text-stone-900 font-semibold text-xl">
                You are not a part of any group. You can create by clicking the
                button above.
              </div>
            )}
            {servers.map((server) => (
              <Link href={`/servers/${server.id}`} key={server.id}>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src={server.imageUrl}
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="flex-1 grid gap-1 text-sm">
                    <h2 className="font-semibold">{server.name}</h2>
                  </div>
                  <Button size="sm">View</Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <InitModal isOpen={modelOpen} setModelOpen={setModelOpen} />
    </>
  );
};

export default ListServersMain;