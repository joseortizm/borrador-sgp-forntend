import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
/*
export default function Inicio() {
  return (   
       <div>
          <Head>
            <title>Clinica internacional - SGP</title>
          </Head>
           <Navigation>
          <div>
             <p className="test">seccion inicio</p>            
          </div>
          </Navigation>
       
      </div>

  )
}

*/

//consumo de api
import fetch from "isomorphic-fetch"
import Users from "../components/users"


import {useEffect, useState} from "react";

 //console.log(JSON.parse(localStorage.getItem("userData")));
 //const userData = JSON.parse(localStorage.getItem("userData")) //depende de donde use la data del usuario, devolvera un string en este caso 
 //const [userData, setUserData] = useState('');

function test(){

console.log(JSON.parse(localStorage.getItem("userData")));


}
//la soluicion seria combinar locastora hook
//local storage y next

const Inicio = (props) => {
  //console.log(props)
  return (
    <div>
      <Head>
            <title>Clinica internacional - SGP</title>
          </Head>
           <Navigation>
          <div>
             <p className="test">seccion inicio</p>
                 <p>Bienvenidos</p>    
                <Users users={props.users}/> 
                <button onClick={test}>Test</button>           
          </div>
          </Navigation>






   </div>
   );
};

Inicio.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data  = await res.json();
  //console.log(data);
   
  return {users:data} 



}

export default Inicio;




