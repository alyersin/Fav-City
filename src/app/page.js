"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Button,
  Input,
  Heading,
  Box,
  Text,
  Icon,
  HStack,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { data: session } = useSession();

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* Header Section */}
      <Box bg="gray.50" paddingY="10px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={{ base: "10px 20px", md: "10px 40px" }}
          maxWidth="1280px"
          mx="auto"
        >
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/Fav-City-01.png" alt="Fav City Logo" boxSize="50px" objectFit="contain" width="100%" />
          </Link>

          {/* Desktop Menu */}
          {isMobile ? (
            <Button onClick={onOpen} variant="ghost">
              <HamburgerIcon boxSize={6} />
            </Button>
          ) : (
            <Box display="flex" alignItems="center" gap="18px">
              <Text>Currency</Text>
              <Text>English</Text>
              <Link href="/City">
                <Text>City</Text>
              </Link>
              <Link href="/Favorites">
                <Text>Favorites</Text>
              </Link>
              {session ? (
                // Show profile link if user is logged in
                <Link href="/profile">
                  <Button colorScheme="pink" borderRadius="50px" padding="0 28px" fontSize="lg">
                    Profile
                  </Button>
                </Link>
              ) : (
                // Show login button if user is not logged in
                <Link href="/Login">
                  <Button colorScheme="pink" borderRadius="50px" padding="0 28px" fontSize="lg">
                    Login
                  </Button>
                </Link>
              )}
            </Box>
          )}
        </Box>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody display="flex" flexDirection="column" alignItems="center" paddingY="40px">
            <Text fontSize="xl" marginBottom="16px">Currency</Text>
            <Text fontSize="xl" marginBottom="16px">Language</Text>
            <Link href="/City" onClick={onClose}>
              <Text fontSize="xl" marginBottom="16px">City</Text>
            </Link>
            <Link href="/Favorites" onClick={onClose}>
              <Text fontSize="xl" marginBottom="16px">Favorites</Text>
            </Link>
            {session ? (
              <Link href="/profile" onClick={onClose}>
                <Button colorScheme="pink" borderRadius="50px" padding="0 28px" fontSize="lg">
                  Profile
                </Button>
              </Link>
            ) : (
              <Link href="/Login" onClick={onClose}>
                <Button colorScheme="pink" borderRadius="50px" padding="0 28px" fontSize="lg">
                  Login
                </Button>
              </Link>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

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
        <Heading size="xl" marginBottom="16px" textAlign="center">
          what&#39;s your destination?
        </Heading>

        <Box display="flex" alignItems="center" gap="8px" flexDirection={{ base: "column", md: "row" }}>
          <Input
            placeholder="City, Region or Country"
            width={{ base: "100%", md: "300px" }}
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
          />
          <Button colorScheme="blue" width={{ base: "100%", md: "auto" }}>Search</Button>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box as="footer" width="100%" bg="gray.900" color="white" padding="16px" textAlign="center">
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
