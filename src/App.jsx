
import "./App.css";
import { useState } from "react";
import Rotas from "./Rotas/rotas";

function App() {

  const [user, setUser] = useState([])

  return (
    <div className="App">
      <Rotas 
      user={user} setUser={setUser} />
    </div>
  );
}

export default App;
