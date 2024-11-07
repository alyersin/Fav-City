"use client";

import { Box, Heading, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function ResetPassword() {
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
                padding="40px"
                width="400px"
                textAlign="center"
            >
                <Heading as="h2" size="lg" color="#00308F" marginBottom="20px">
                    Reset Password
                </Heading>
                <Text fontSize="sm" color="gray.600" marginBottom="20px">
                    Enter your email to receive a password reset link.
                </Text>
                <FormControl id="email" marginBottom="20px">
                    <FormLabel fontSize="sm" color="#00308F">Email</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <Button bg="#2563EB" color="white" width="100%" borderRadius="50px" height="50px">
                    Send Reset Link
                </Button>
            </Box>
        </Box>
    );
}
