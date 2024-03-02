import { Open_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/general/Navbar";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ethos",
  description: "A platform for colab learning",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
