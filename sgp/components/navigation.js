import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsTextLeft } from "react-icons/bs";
import React, { useRef } from "react";



const Navigation = (props) => {
  const side = useRef(null);  
  const move = () => {
    side.current.classList.toggle("toggled");
    };
  return (

<div className="d-flex" id="wrapper"ref={side}>
    <div style={{backgroundColor: '#329fe7'}} id="sidebar-wrapper">

      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
       <Link href="/inicio">
      <h5 className="text-white mouse">Clinica internacional</h5>
      </Link> 
      </div>
      <div className="list-group list-group-flush my-3">      
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Bienvenido Teo Chambilla</p>
        <Link href="/inicio">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless mouse">Inicio</p>
        </Link> 
        <Link href="/registro">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless mouse">Registro</p>
        </Link> 
        <Link href="/pacientes">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless mouse">Pacientes</p>
        </Link> 
        <Link href="/seguimiento">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless mouse">Seguimiento</p>
         </Link> 
         <Link href="/administracion">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless mouse">Administración</p> 
        </Link>     
        <Link href="/">           
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless mouse">Cerrar sesión</p>
        </Link> 
      </div> 
    </div>
    <div id="page-content-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 px-4">
        <div className="d-flex align-items-center">
          <BsTextLeft className="fas fa-align-left primary-text fs-2 me-3" id="menu-toggle" onClick={move}/>         
          <h2 className="fs-2 m-0">Sistema de Gestión de Pacientes</h2>
        </div> 
      </nav>
      <div className="container"> 
        {props.children}
      </div>
    
    </div>


</div> 



   


  )
}

export default Navigation