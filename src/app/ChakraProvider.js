// src/app/ChakraProvider.js
"use client";

import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraProviderWrapper({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
