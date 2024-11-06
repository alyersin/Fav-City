"use client";

import { Box } from "@chakra-ui/react";

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
                borderWidth="1px"
                borderColor="black"
                borderStyle="solid"
                padding="20px"
                >
                <h1>Hello from the login page</h1>
            </Box>
        </Box>
    );
}
