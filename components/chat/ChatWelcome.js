import { Boxes } from "lucide-react";

export const ChatWelcome = ({ name, type }) => {
  return (
    <div className="space-y-2 px-4 mb-1">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
          <Boxes className="h-12 w-12 text-white" />
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold flex gap-2">
        {type === "channel" ? (
          <span className="flex items-center gap-2">
            <span>Welcome to</span> <Boxes className="mt-1" />
          </span>
        ) : (
          ""
        )}
        {name}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {type === "channel" && `This is the start of the ${name} thread.`}
      </p>
    </div>
  );
};
