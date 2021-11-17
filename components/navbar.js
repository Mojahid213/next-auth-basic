import Link from "next/link";
import { signIn, signOut } from "next-auth/client";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
          <h1 className="logo-icon">NextAuth</h1>
          <ul className="menu-lists">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
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
          </ul>
        </nav>
      </div>
    </>
  );
}
