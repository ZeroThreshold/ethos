"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { InitModal } from "../modals/InitModal";
import { useState } from "react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Title } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
const ListServersMain = ({ servers, allservers, profile }) => {
  const [modelOpen, setModelOpen] = useState(false);
  let username = profile.name.split(" ")[0];
  const [searchInput, setSearchInput] = useState("");
  const [filteredServers, setFilteredServers] = useState(allservers);

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      setFilteredServers(allservers);
    } else {
      const filtered = allservers.filter(
        (server) => server.category.toLowerCase() === searchInput.toLowerCase()
      );
      setFilteredServers(filtered);
    }
  };

  return (
    <>
      <div className="h-full">
        <div className="w-full py-6 flex flex-col items-center pt-10 container">
          <div className="flex justify-between gap-2 w-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hey {username}
              </h1>
              <span className="font-base">
                Let's explore something new Today
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
                  <div className="flex-1 grid gap-1 text-xl">
                    <h2 className="font-semibold text-lg">
                      {server.name.replace(/\b\w/g, (c) => c.toUpperCase())}
                    </h2>
                    <Separator />
                    <h2 className="font text-xs">{server.category}</h2>
                  </div>
                  <Button size="sm">View</Button>
                </div>
              </Link>
            ))}
            <Separator />

            <h2 className="text-3xl font-bold">Explore Communities</h2>
            <Separator />
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                className="px-3 py-2 w-80"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button className="px-3 py-2" onClick={handleSearch}>
                Search
              </Button>
            </div>
            {filteredServers.map((server) => (
              <Link
                href={`/invite/${server.inviteCode}`}
                key={server.inviteCode}
              >
                <div className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg cursor-pointer transition duration-300 transform hover:scale-105">
                  <div className="relative">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src={server.imageUrl}
                      style={{
                        aspectRatio: "1/1",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="flex flex-col ml-4">
                    <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                      {server.name.replace(/\b\w/g, (c) => c.toUpperCase())}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {server.description}
                    </p>
                    <span className="text-gray-500 text-sm mt-1">
                      {server.category}
                    </span>
                  </div>
                  <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Join
                  </button>
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
