"use client";
import { Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import Link from "next/link";


export default function Favorites() {
    return (
        <div>
            <Heading>Hello from the Favorites page</Heading>
            <Link href="/">
                <Button>Go back</Button>
            </Link>
        </div>
    )
}