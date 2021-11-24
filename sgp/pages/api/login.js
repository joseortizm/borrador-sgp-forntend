//import {NextApiRequest, NextApiResponse} from "Next"

import jwt from "jsonwebtoken"

const KEY = "mySecretKey"


export default (req, res) => {
  const body = JSON.parse(req.body);
  
  //console.log(req.body); //funciona solo
   
   //res.status(200).json({ num: Math.floor(Math.random()*10) });
  
  const id = body.identificacion;
  
  const pass = body.password;

 

 //console.log(id);
 
 //console.log(pass);
  

  //res.status(200).json({ status: 'OK' });


	if(!req.body){
		res.statusCode = 404;
		res.end("Error");
		return;
	}

	//const {indentificacion, passowrd} = req.body;

const years = 1990;

  res.json({
  	token: jwt.sign(
  			{
  				id,
  				years
  				//admin: id === "admin" && pass === "admin"

  			},KEY)

  })



};





/*

export default function (req, res) {

 //console.log(${body.req};  
 //return(req.body);
 //console.log(req.body.username);
 //const body = JSON.parse(req.body);
 console.log(req.body);
 res.status(200).json({ num: Math.floor(Math.random()*10) });
 //return req.body;
}


*/