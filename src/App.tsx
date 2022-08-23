import "./App.css";
import Rotas from "./Rotas/rotas";
import Modal from 'react-modal';

function App() {

  Modal.setAppElement('#root');

  return (
    <div className="App">
        <Rotas/>
    </div>
  );
}

export default App;
