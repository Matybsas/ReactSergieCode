import React from 'react'
import ReactDOM from 'react-dom/client'
import { Formulario } from './components/formulario';
import {PrimerComponente} from './components/primerComponente';
import {SegundoComponentesEventos} from './components/segundoComponentesEventos';
import { TercerComponenteTernarios } from './components/tercerComponenteTernarios';
import { CuartoComponenteArreglos } from './components/cuartoComponenteArreglos';
import './style.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <PrimerComponente
    titulo={'Declaramos Variables por Fuera de la Funcion flecha'}
    subtitulo={'llamamos a las variables dentro del codigo html'}
    />
    <SegundoComponentesEventos 
    value={0} 
    />
    <TercerComponenteTernarios/>
    <CuartoComponenteArreglos/>
  </React.StrictMode>,
)
