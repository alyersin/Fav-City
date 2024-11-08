"use client";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { ChakraProvider } from "@chakra-ui/react"; // Assuming you're using ChakraProvider too
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider> {/* Wrap the entire app */}
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
