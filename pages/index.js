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
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.titleLogo}></div>
          <div className={styles.titleText}>hint water tracker</div>
        </div>
        <div className={styles.description}>
          Join along in tracking how many hint waters you’re drinking per day.
          Can you reach the top?
        </div>
        <div className={styles.buttons}></div>
      </main>
    </div>
  );
}
