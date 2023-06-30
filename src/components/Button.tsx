interface Props {
  text: string;
  handleClick: () => void;
}
export default function Button(props: Props) {
  //   const handleClick = () => {
  //     alert("Siiiii aqui le diste click");
  //   };
  return <button onClick={props.handleClick}>{props.text}</button>;
  //onClick={() => alert("Clickend")}>{props.text}
}
