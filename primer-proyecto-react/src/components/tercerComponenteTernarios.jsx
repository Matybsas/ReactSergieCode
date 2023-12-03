{/**Creamos una funcion de un componente externo */}

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {/**Hacemos un ternario */}
      {visto ? "✅" : "⛔"}
      {/**Tambien puede usarse doble ampersam &&
       * {visto && '✅'}
       * 
       */}
    </li>
  );
};

export const TercerComponenteTernarios = () => {
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <ol>
        {/**Creamos una lista  */}
        <Items nombre="Instalaciones necesarias" visto={true}/>
        <Items nombre="Uso de Vite" visto={true}/>
        <Items nombre="Componentes" visto={true}/>
        <Items nombre="Variables en JSX" visto={true}/>
        <Items nombre="props" visto={true}/>
        <Items nombre="Evenetos" visto={true}/>
        <Items nombre="useState" visto={true}/>
        <Items nombre="Redux" visto={false}/>
        <Items nombre="customHooks" visto={false}/>
      </ol>
    </>
  );
};
