import styles from "../styles/Buttons.module.css";

export default function Button(props) {
  return <button className={styles.button}>{props.text}</button>;
}
