"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import Link from "next/link";

export const GradientText = ({ text, gradient, classes }) => {
  return (
    <span
      style={{
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className={classes}
    >
      {text}
    </span>
  );
};

const NavBar = () => {
  const router = usePathname();
  return (
    <div className="w-full flex justify-between py-4 px-6 border-b shadow-sm">
      <Link href={router === "/" ? "/home" : "/"}>
        <GradientText
          text="ETHOS"
          gradient="-webkit-linear-gradient(45deg, #338cf5, #4fd1c5)"
          classes="text-3xl font-bold"
        />
        <span className="text-sm font-semibold"> by ZeroThreshold</span>
      </Link>
      <UserButton />
    </div>
  );
};

export default NavBar;
