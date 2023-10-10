import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "~/app/providers";
import "~/styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Beats",
  description: "Magic Beats Music Academy",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
