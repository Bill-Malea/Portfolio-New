import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import Router from "next/router";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  Router.events.on("routeChangeStart", startLoading);
  Router.events.on("routeChangeComplete", stopLoading);
  Router.events.on("routeChangeError", stopLoading);

  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/Avenir Next LT W04 Thin.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Bill Malea</title>
        <meta name="description" content={`Software Engineer`} />
      </Head>

      <header className="header">
        <Navbar />
      </header>

      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
