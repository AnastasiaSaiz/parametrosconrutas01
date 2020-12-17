import { useState } from "react";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";

const Saludo = () => {
  const params = useParams()
  const nombre = params.nombre
  return <h1>Hola {nombre}</h1>
}

function App() {
  const [text, setText] = useState("");

  const actualizar = (e) => {
    setText(e.target.value);
  }
  return (
    <BrowserRouter>
      <input type="text" value={text} onChange={actualizar} />
      <Link to={"/saludar/" + text}>Saludar</Link>
      <Route exact path="/saludar/:nombre">
        <Saludo />
      </Route>
    </BrowserRouter>
  );
}

export default App;
