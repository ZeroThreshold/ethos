import { Open_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/providers/ModalProviders";
import NavBar from "@/components/general/NavBar";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ethos",
  description: "A platform for colab learning",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <NavBar />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
