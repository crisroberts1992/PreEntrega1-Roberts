import NavBar from "./Components/NavBar";
import './App.css';
import { Fragment } from 'react';
import ItemlistContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer';




function App () {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemlistContainer/>} />
      <Route path="/tipo/:tipo" element={<ItemlistContainer/>} />
      <Route path="/:tipo/:vinoID" element={<ItemDetailContainer/>} />

      
      </Routes>


    </BrowserRouter>
      <Footer />

    </>
  );
}
export default App;


