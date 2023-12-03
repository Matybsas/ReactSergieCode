import './primerComponente.css';
{/**importamos propiedades de types */}
import propTypes from 'prop-types';


{
  /**LAS VARIABLES VAN FUERA DE LA FUNCION PARA QUE CUANDO SE MODIFIQUE
 EL COMPONENTE NO SE VUELVAN A RANDERIZAR Y SOLO TIENEN ALCANZE LOCAL
SOLO ESTAN DISPONIBLES PARA ESTE COMPONENTE */
}
const string = "Esto es un texto";
const number = 123456;
const array = ["curso React", "Youtube", 4, 10000];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: "curso de JavaScript", duracion: 4 };
const fecha = new Date();


{/**pasamos props para utilizarlos desde el padre */}
export const PrimerComponente = ({titulo, subtitulo}) => {
  return (
    <>
      {/**Utilizamos los props dentro del codigo html, para modificarlos desde el padre */}
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      
      
      <h3>variable tipo:</h3>
      <p>{string}</p>
      <h3>variable tipo:</h3>
      <p>{number}</p>
      <h3>variable tipo:</h3>
      <p>{array}</p>
      <h3>variable tipo:</h3>
      <p>{boolean}</p>
      <h3>variable tipo:</h3>
      <p>{funcion()}</p>
     
      {
      /*  No se puede pasar un objeto en react de esta forma <p>{objeto}</p>*/
      }

      {/*Asi se pasan los objetos en react*/}
      <p>{JSON.stringify(objeto)}</p>

      {/** new date tambien es un objeto y hay que pasarlo de esta manera */}
      <p>{JSON.stringify(fecha)}</p>
    </>
  );
};

{/**LO QUE HACEMOS ES RESTRINGIR EL CODIGO PARA QUE SI O SI REQUIERA UN STRING EN ESTE EJEMPLO Y SI LLEGARA
A FLATAR EL MISMO LANZARA UN ERRO AVISANDONOS QUE ESPERA UN STRING Y QUE ES REQUERIDO */}
PrimerComponente.propTypes ={
    titulo: propTypes.string.isRequired,
    subtitulo: propTypes.string.isRequired
}

{/**EN ESTE CASO PODEMOS ASIGNARLE UN VALOR POR DEFECTO EN CASO QUE EN EL PADRE NO LO COMPLETEMOS */}
PrimerComponente.defaultProps ={
    titulo: 'Curso de React',
    subtitulo:'Seccion de Props'
}