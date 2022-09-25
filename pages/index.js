import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";

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
          <Image
            className={styles.titleLogo}
            src="/../public/icon.png"
            width={50}
            height={50}
          />
          <div className={styles.titleText}>hint water tracker</div>
        </div>
        <div className={styles.description}>
          Join along in tracking how many hint waters you’re drinking per day.
          Can you reach the top?
        </div>
        <div className={styles.buttonSection}>
          <Button text="log in" href="/api/auth/login" />
          <Button text="join the fun" href="/api/auth/login" />
        </div>
      </main>
    </div>
  );
}
