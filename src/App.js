import NavBar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer"

function App () {
  return (
    <div>
    <div className="App">
      <NavBar/>
    </div>
    <div className="Contenedor">
    <ItemListContainer/>
    </div>
    </div>
  );
}

export default App;
