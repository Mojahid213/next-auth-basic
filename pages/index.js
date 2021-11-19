import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return <h2>Welcome again {session ? `${session.user.name}` : ""}</h2>;
}
