import styles from "../styles/Buttons.module.css";

export default function Button(props) {
  return (
    <button className={styles.button}>
      <a href={props.href}>{props.text}</a>
    </button>
  );
}
