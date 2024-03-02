import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const GradientText = ({ text, gradient }) => {
  return (
    <span
      style={{
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
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
          text="ColabCode"
          gradient="-webkit-linear-gradient(45deg, #338cf5, #4fd1c5)"
        />
        <GradientText
          text=" by ZeroThreshold"
          gradient="-webkit-linear-gradient(10deg, #338cf5, #4fd1c5)"
        />
      </Link>
      <UserButton />
    </div>
  );
};

export default NavBar;
