"use client";

import { Box, Image, Text, Button, FormControl, FormLabel, Input, Heading, Divider, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Login() {
    return (
        <Box
            bg="linear-gradient(179.41deg, #D3E6FF 0.51%, #FFFFFF 100%)"
            display="grid"
            placeItems="center"
            minHeight="100vh"
            width="100vw"
        >
            <Box 
                bg="white"
                borderRadius="10px"
                height="500px"
                width="700px"
                display="flex"
                flexDirection="row"
                alignItems="stretch"
                gap="20px"
            >
                {/* Image container on the left */}
                <Box width="50%" height="100%">
                    <Image 
                        src="/assets/2024-11-07 122146.png"
                        alt="Login"
                        objectFit="cover"
                        borderRadius="10px 0 0 10px"
                        width="100%" 
                        height="100%"
                    />
                </Box>

                {/* Text container on the right */}
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="16px">
                    <Heading as="h2" size="lg" textColor="#00308F">
                        FavCity
                    </Heading>
                    <FormControl id="email" width="90%">                      
                        <FormLabel fontSize="sm" textColor="#00308F">Email</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password" width="90%">                      
                        <FormLabel fontSize="sm" textColor="#00308F">Password</FormLabel>
                        <Input type="password" />
                    </FormControl>

                    <Button bg="#2563EB" textColor="white" width="88%" borderRadius="50px" height="50px">
                        Login
                    </Button>

                    <Text fontSize="sm" width="90%"> {/* Makes the text smaller */}
                        If you need to reset your password,{" "}
                        <Link href="/">
                            <Text as="span" textDecoration="underline" color="blue.500" _hover={{ color: "blue.700" }}>
                                you can do so here.
                            </Text>
                        </Link>
                    </Text>

                                        {/* Horizontal line with OR in the center */}
                    <Flex align="center" width="90%" my="10px">
                        <Divider />
                        <Text px="2" fontSize="sm" color="gray.500">OR</Text>
                        <Divider />
                    </Flex>

                    <Button variant="outline" width="88%" borderRadius="50px" borderColor="gray.300" leftIcon={<Image src="/assets/google-icon.png" alt="Google Icon" boxSize="40px" />}>
                        Sign In with Google
                    </Button>

                    <Text fontSize="sm" width="90%" textAlign="center"> {/* Makes the text smaller */}
                        Not a member yet? {" "}
                        <Link href="/">
                            <Text as="span" textDecoration="underline" color="blue.500" _hover={{ color: "blue.700" }}>
                                Get started here.
                            </Text>
                        </Link>
                    </Text>

                </Box>
            </Box>
        </Box>
    );
}
