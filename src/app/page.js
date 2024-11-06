// src/app/page.js
"use client";
import Link from "next/link"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"



export default function Home() {
  return (
    <main>

      <Link href="/City">
        <Button>City</Button>
      </Link>
      <Link href="/Favorites">
        <Button>Favorites</Button>
      </Link>
      <Link href="/Login">
        <Button>Login</Button>
      </Link>
      <Input placeholder="Search..." />
      <Heading>Welcome to the Home Page</Heading>

    </main>
  );
}
