import Navbar from "../components/navbar";
import "../styles/globals.css";
import { Provider } from "next-auth/client";
import "../components/navbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
