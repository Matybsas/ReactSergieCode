import {useState}from 'react'

export const Formulario = (agregarTarea) => {
    //*Creamos una variable inputValue  para utilizar con useState y permitir escribir denton del input
    const [inputValue, setinpuetValue] = useState('');
    //*Cremaos el evento onChange para escuchar los cambios del formulario input 
    const onInputChange = (event) => {
        setinpuetValue(event.target.value)
    }
    //*Creamos onSubmit y preventDefault para evitar que se nos recarge la pagina al cargar el input 
    const onSubmit = (event)=>{
        event.preventDefault();
       //*TOTAMOS EL VALOR DEL INPUT A TRAVES DEL ARGUMENTO DECLARADO ARRIBA 
        agregarTarea(inputValue);
    }
  return (
    //*CREAMOS UN FORMULAEIO CON SU INPUT 
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder='Ingresa tarea Nueva'
        value={inputValue}
        onChange={onInputChange}
        />
    
    </form>
  )
}
