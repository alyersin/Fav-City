"use client";

import { Box, Image, Text, Button, FormControl, FormLabel, Input, Heading, Divider, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Login() {
    return (
        <Box
            bg="linear-gradient(179.41deg, #D3E6FF 0.51%, #FFFFFF 100%)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            width="100vw"
            gap="24px"
            padding="16px"  // Adds padding for smaller screens
        >
            <Box 
                bg="white"
                borderRadius="10px"
                height={{ base: "auto", md: "500px" }}
                width={{ base: "100%", md: "700px" }}
                maxWidth="700px" // Ensures it doesn't exceed the design width
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="stretch"
                gap="20px"
            >
                {/* Image container on the left */}
                <Box 
                    width={{ base: "100%", md: "50%" }} 
                    height={{ base: "200px", md: "100%" }} 
                    display={{ base: "none", sm: "block" }} // Hide the image on extra small screens
                >
                    <Image 
                        src="/assets/2024-11-07 122146.png"
                        alt="Login"
                        objectFit="cover"
                        borderRadius={{ base: "10px 10px 0 0", md: "10px 0 0 10px" }}
                        width="100%" 
                        height="100%"
                    />
                </Box>

                {/* Text container on the right */}
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="16px" padding="16px">
                    <Heading as="h2" size="lg" textColor="#00308F">
                        Fav City
                    </Heading>
                    <FormControl id="email" width={{ base: "100%", sm: "90%" }}>                      
                        <FormLabel fontSize="sm" textColor="#00308F">Email</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password" width={{ base: "100%", sm: "90%" }}>                      
                        <FormLabel fontSize="sm" textColor="#00308F">Password</FormLabel>
                        <Input type="password" />
                    </FormControl>

                    <Button 
                        bg="#2563EB" 
                        textColor="white" 
                        width={{ base: "100%", sm: "88%" }} 
                        borderRadius="50px" 
                        height="50px"
                    >
                        Login
                    </Button>

                    <Text fontSize="sm" width={{ base: "100%", sm: "90%" }} textAlign="center">
                        If you need to reset your password,{" "}
                        <Link href="/Login/ResetPassword">
                            <Text as="span" textDecoration="underline" color="blue.500" _hover={{ color: "blue.700" }}>
                                you can do so here.
                            </Text>
                        </Link>
                    </Text>

                    {/* Horizontal line with OR in the center */}
                    <Flex align="center" width={{ base: "100%", sm: "90%" }} my="10px">
                        <Divider />
                        <Text px="2" fontSize="sm" color="gray.500">OR</Text>
                        <Divider />
                    </Flex>

                    <Button 
                        variant="outline" 
                        width={{ base: "100%", sm: "88%" }} 
                        borderRadius="50px" 
                        borderColor="gray.300" 
                        leftIcon={<Image src="/assets/google-icon.png" alt="Google Icon" boxSize="20px" />}
                    >
                        Sign In with Google
                    </Button>

                    <Text fontSize="sm" width={{ base: "100%", sm: "90%" }} textAlign="center">
                        Not a member yet?{" "}
                        <Link href="/Login/Register">
                            <Text as="span" textDecoration="underline" color="blue.500" _hover={{ color: "blue.700" }}>
                                Get started here.
                            </Text>
                        </Link>
                    </Text>
                </Box>
            </Box>

            <Box display="flex" gap="16px" fontSize="md" mt="20px" flexDirection={{ base: "column", sm: "row" }} alignItems="center">
                <Link href="/">
                    <Text _hover={{ color: "blue.500" }} cursor="pointer">Home</Text>
                </Link>
                <Link href="/City">
                    <Text _hover={{ color: "blue.500" }} cursor="pointer">Cities</Text>
                </Link>
                <Link href="/Favorites">
                    <Text _hover={{ color: "blue.500" }} cursor="pointer">Favorites</Text>
                </Link>
            </Box>
        </Box>
    );
}
