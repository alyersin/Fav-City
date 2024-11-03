// src/app/page.js
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>Navigate to:</p>
      <Link href="/City">
        <button>Go to City page</button>
      </Link>
      <Link href="/Favorites">
        <button>Go to Favorites page</button>
      </Link>
      <Link href="/Search">
        <button>Go to Search page</button>
      </Link>
    </main>
  );
}
