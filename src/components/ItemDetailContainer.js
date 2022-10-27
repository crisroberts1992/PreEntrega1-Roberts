import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";



function ItemDetailContainer() {
    const {libroID} = useParams();
    const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(true)

  const getItem = () => {
    let items = require("../Backend/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(false)
        }, 1000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await getItem(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);


 return(

    
        <div className="md:flex justify-start ml-10 h-[100vh] ">   
        {loading ? cartas : cartas
          .filter((libro) => libro.id.includes(libroID))
          .map((el)=>(

            <ItemDetail 
            key={el.id}
            nombre={el.nombre}
            img = {el.img}
            tipo = {el.tipo}
            id={el.id}
            valor = {el.valor}
            stock= {el.stock}

            />
          ))}
        
      


        
        </div>

    );
     

}

export default ItemDetailContainer;