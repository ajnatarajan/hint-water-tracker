import styles from "../styles/utils.module.css";
import Button from "../components/Button";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Home = withPageAuthRequired(({ user }) => {
  console.log(user);
  console.log("OY");
  return (
    // Makes sure user is loaded before rendering anything
    user && (
      <div className={styles.heading}>
        Hey there {user.name}, welcome to {user.company}
        <Button text="log out" href="/api/auth/logout" />
      </div>
    )
  );
});

export default Home;
