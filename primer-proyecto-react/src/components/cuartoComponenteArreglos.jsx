import { useState } from "react";
import { Formulario } from "./formulario";

//*Creamos un mini componente por fuera de la funcion 
//*Hacemos un ternario con el parametro visto
const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      
      {visto ? "✅" : "⛔"}
      {/**Tambien puede usarse doble ampersam &&
       * {visto && '✅'}
       *
       */}
    </li>
  );
};

export const CuartoComponenteArreglos = () => {
  
  //**Creamos una funcion onClick y mediante useState (setArreglo) agregamos elementos a la lista
  const addTask= () =>{
    setArreglo([...arreglo, {nombre: 'Nuevo', visto: true}])
  }
  //**Creamos un Array de objetos 
  let listadoSecciones = [
    {id:0, nombre: "Instalaciones necesarias", visto: true },
    {id:1, nombre: "Uso de Vite", visto: true },
    {id:2, nombre: "Componentes", visto: true },
    {id:3, nombre: "Variables en JSX", visto: true },
    {id:4, nombre: "Props", visto: true },
    {id:5, nombre: "Eventos", visto: true },
    {id:6, nombre: "useState", visto: true },
    {id:7, nombre: "Redux", visto: false },
    {id:8, nombre: "customHooks", visto: false },
  ];
  //**Creamos una variable y declaramos useState 
    const [arreglo, setArreglo] = useState(listadoSecciones);
//* Creamos la funcion flecha por medio de la variable onAgregarTarea.
//*le agregamos .trim para eliminar los espacios
//*le ponemos un if para que si no ingresan datos se salga y no agregue al valor.
//*Convertimos el string ingresado en un objeto de array llamado envio.
//*por medio de setArreglo se agrega el nuevo objeto
const onAgregarTarea = (val) => {
  let valor = val.trim();
  if (valor <1 )return
  const envio ={
    id:arreglo.length +1,
    nombre: valor,
    visto:false
  }
  setArreglo([...arreglo,envio]);
}

  return (
    <>
      <h1>Arreglos</h1>
      {/*Le agregamos una funcion al formulario*/}
      <Formulario  agregarTarea={onAgregarTarea}/>
      <ol>
        {/**mediante map recorremos el arreglo para trear todos los elementos de la lista */}
        {arreglo.map((item) => (
          <Items key={item.id} nombre={item.nombre} visto={item.visto} />
        ))}
      </ol>
      {/**Creamos un boton para agregar elementos a la lista */}
      <button onClick={()=> addTask()}> Agregar Tarea </button>
    </>
  );
};
