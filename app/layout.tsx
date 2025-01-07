import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, SignedOut } from "@clerk/nextjs";



export const metadata: Metadata = {
  title: "Imaginify",
  description: "Ai-Generated Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables : {colorPrimary: "#624cf5"}}}>
      <html lang="en">
        <body>
          <SignedOut>
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

