import styles from "../styles/utils.module.css";
import Button from "../components/Button";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Home = withPageAuthRequired(({ user }) => {
  return (
    // Makes sure user is loaded before rendering anything
    user && (
      <div>
        <Head>
          <title>Hint Water Tracker</title>
          <meta
            name="description"
            content="Figure out how much hint water you've drunk"
          />
          <link rel="icon" href="/icon.png" />
        </Head>
        <main className={styles.main}>
          <nav className={styles.navbar}>
            <div></div>
            <div className={styles.title}>
              <Image
                className={styles.titleLogo}
                src="/icon.png"
                width={50}
                height={50}
              />
              <div className={styles.titleText}>hint water tracker</div>
            </div>

            <Button
              text="log out"
              href="/api/auth/logout"
              propsClass={styles.logoutButton}
            />
          </nav>
          Hey there {user.name}, welcome to {user.company}
        </main>
      </div>
    )
  );
});

export default Home;
