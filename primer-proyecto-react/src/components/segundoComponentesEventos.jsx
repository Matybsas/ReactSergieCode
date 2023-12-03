import { useState } from "react";
{
  /**Creamos un componente mas chico dentro de otro componente mediante una funcion flecha 

const Button=()=>{
    return(
    <button>Soy un Boton</button>
    )
}
*/
}

export const SegundoComponentesEventos = ({value}) => {
    
{/**Creamos la variable contador, con setContador modificamos la variable contador y useState toma el valor del padre
en este caso value. */}    
    const [contador, setContador] = useState(value);

{/**UTILIZAMOS ESTA FORMA CUANDO EN EL EVENTO NECESITAMOS MAS DE UN ARGUMENTO 
  function handleClick(event, argumento) {
    console.log(event);
    console.log(argumento)
  }
*/}

{/**UTILIZAMOS ESTA FORMA SI SOLO DECLARAMOS UN ARGUMENTO */}
const handleClick =()=> {
    setContador(contador +1);
}

  return (
    <>
      <h1>contador:</h1>
      {/**utilizamos esta forma para cuando tenemos que pasar mas de un argumento 
      <button onClick={(event) => handleClick(event)}>soy un boton</button>
      */}
      <p>{contador}</p>
      {/**SI PASAMOS UN SOLO ARGUMENTO UTILIZAMOS ESTA FORMA DE DECLARARLO */}
      <button onClick={handleClick}>soy un boton</button>
    </>
  );
};
