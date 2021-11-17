import Navbar from "../components/navbar";
import "../styles/globals.css";
import "../components/navbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
