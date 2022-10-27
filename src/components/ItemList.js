import { useState, useEffect } from "react";
import Spinner from './Spinner'
import Item from "./Item";
import { useParams } from "react-router-dom";



export default function ItemList(){

  const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(false)
  const {tipo} = useParams();
  

  
  const listado = () => {
    let items = require("../Backend/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(true)
        }, 2000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await listado(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);

  



    return ( 
        <div className="flex flex-wrap justify-start">
          {!loading ? cartas 
          : tipo ? cartas
          .filter((libro) => libro.tipo === tipo)
          .map((el)=>(

            <Item 
            key={el.id}
            nombre={el.nombre}
            img = {el.img}
            tipo = {el.tipo}
            id={el.id}

            />
          ))
        : cartas
        .map((el)=>(

          <Item 
          key={el.id}
          nombre={el.nombre}
          img = {el.img}
          tipo = {el.tipo}
          id={el.id}

          />
        ))
        }
        </div>

    );
}