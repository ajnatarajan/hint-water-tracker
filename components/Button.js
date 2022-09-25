export default function Button(props) {
  return (
    <button className={props.propsClass}>
      <a href={props.href}>{props.text}</a>
    </button>
  );
}
