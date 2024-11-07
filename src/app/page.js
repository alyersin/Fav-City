"use client";
import Link from "next/link";
import { Button, Input, Heading, Box, Text, Icon, HStack, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* Header Section */}
      <Box bg="gray.50" paddingY="10px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px 40px"
          maxWidth="1280px"
          mx="auto"
        >
          <Box display="flex" alignItems="center" gap="18px">
            <Link href="/">
            <Image src="/assets/Fav-City-01.png" alt="Fav City Logo" boxSize="50px" width="100%" />
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
              <Button colorScheme="pink" borderRadius="50px" padding="0 28px" fontSize="lg">Login</Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Main Content Section */}
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
        flex="1"
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

      {/* Footer Section */}
      <Box
        as="footer"
        width="100%"
        bg="gray.900"
        color="white"
        padding="16px"
        textAlign="center"
      >
        <Text fontSize="sm" mb="8px">
          &copy; {new Date().getFullYear()} Fav City. All rights reserved.
        </Text>
        <HStack justify="center" spacing="20px">
          <Link href="https://github.com/alyersin" isExternal>
            <Icon as={FaGithub} boxSize="6" _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/ersin-ali-228301107/" isExternal>
            <Icon as={FaLinkedin} boxSize="6" _hover={{ color: "blue.400" }} />
          </Link>
          <Link href="https://www.facebook.com/aly.ersin" isExternal>
            <Icon as={FaFacebook} boxSize="6" _hover={{ color: "blue.600" }} />
          </Link>
          <Link href="https://x.com/shase6" isExternal>
            <Icon as={FaTwitter} boxSize="6" _hover={{ color: "blue.500" }} />
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}
