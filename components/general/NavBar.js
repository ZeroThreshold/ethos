import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const GradientText = ({ text, gradient, classes }) => {
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
  return (
    <div className="w-full flex justify-between py-4 px-6 border-b shadow-sm">
      <Link href={`/`}>
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
