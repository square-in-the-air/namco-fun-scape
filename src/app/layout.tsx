import type { Metadata } from "next";
import StoryblokProvider from "@/components/StoryblokProvider";

export const metadata: Metadata = {
  title: "Namco Funscape - Arcade Games, Fun & Entertainment",
  description:
    "Discover Namco Fun Scape, the ultimate destination for classic blowling, arcade games, family fun, and entertainment. Play exciting games, enjoy thrilling challenges, and experience endless fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
