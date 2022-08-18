import "./App.css";
import { useState } from "react";
import Rotas from "./Rotas/rotas";
import Modal from 'react-modal';

function App() {
  const [user, setUser] = useState([]);
  Modal.setAppElement('#root');

  return (
    <div className="App">
        <Rotas user={user} setUser={setUser} />
    </div>
  );
}

export default App;
