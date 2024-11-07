"use client";
import Link from "next/link";
import { Button, Input, Heading, Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <Box bg="gray.50" paddingY="10px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px 40px"
          maxWidth="1280px"
          mx="auto" // Centers the header within the viewport
        >
          <Box display="flex" alignItems="center" gap="18px">
            <Link href="/">
              <Heading as="h2" size="lg" textColor="#00308F">
                Fav City
              </Heading>
            </Link>
            <Text>Currency</Text>
            <Text>Language</Text>
          </Box>

          <Box display="flex" alignItems="center" gap="18px">
            <Link href="/City">
              <Text>City</Text>
            </Link>
            <Link href="/Favorites">
              <Text>Favorites</Text>
            </Link>
            <Link href="/Login">
              <Button>Login</Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box
        backgroundImage="url('/assets/australia-land2.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="400px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding="20px"
      >
        <Heading size="xl" marginBottom="16px">
          what's your destination?
        </Heading>
        <Box display="flex" alignItems="center" gap="8px">
          <Input
            placeholder="City, Region or Country"
            width="300px"
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
          />
          <Button colorScheme="blue">Search</Button>
        </Box>
      </Box>
    </main>
  );
}
