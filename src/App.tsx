// import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [contador, setContador] = useState(0);
  return (
    // <Button
    //   text="Dame un Click 🐶"
    //   handleClick={() => alert("pasando parametros")}
    // />
    <>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Ascendente +</button>
      <button onClick={() => setContador(contador - 1)}>Descendente -</button>
    </>
  );
}

export default App;
