import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hint Water Tracker</title>
        <meta
          name="description"
          content="Figure out how much hint water you've drunk"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>They call me the</h1>
        <h1 className={styles.title}>hint water tracker</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
