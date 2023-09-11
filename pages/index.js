import Head from "next/head";
import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "@/components/HomePage/HomePage";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Bill Malea</title>
        <meta name="description" content="Bill Malea Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <HomePage />
      </main>
    </>
  );
}
