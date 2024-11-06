
"use client";
import { Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import Link from "next/link";



export default function City() {
    return (
        <div>
            <Heading>Hello from the City page</Heading>
            <Link href="/">
                <Button>Go back</Button>
            </Link>
        </div>
    )
}