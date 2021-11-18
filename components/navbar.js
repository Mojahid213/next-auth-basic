import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Navbar() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <>
      <div>
        <nav className="navbar">
          <h1 className="logo-icon">NextAuth</h1>
          <ul
            className={`menu-lists ${
              !session && loading ? "loading" : "loaded"
            }`}
          >
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            {!loading && !session && (
              <li>
                <Link href="/api/auth/signin">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("github");
                    }}
                  >
                    Sign In
                  </a>
                </Link>
              </li>
            )}
            {session && (
              <li>
                <Link href="/api/auth/sighout">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign Out
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
