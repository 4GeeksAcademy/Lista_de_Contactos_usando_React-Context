import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		
		<Link to="/addContacts" className="btn btn-primary mt-3">
			Añadir Contacto
		</Link>
		<Link to="/contacts" className="btn btn-primary mt-3">
			Contactos
		</Link>
	</div>
);
