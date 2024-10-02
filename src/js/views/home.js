import React from "react";
import gusty from "/workspaces/Lista_de_Contactos_usando_React-Context/src/img/E3D0F763-4E94-4F60-9393-9E876FFB2CFD.png"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>MIS CONTACTOS!!!</h1>
		<p>
		<img src={gusty} style={{ width: "350px", height: "500px" }} alt="Imagen de contacto" />

		</p>
		<div className="d-flex justify-content-center mt-3">
		<Link to="/addContacts" className="btn btn-primary me-3">
			Añadir Contacto
		</Link>
		<Link to="/contacts" className="btn btn-primary ms-3">
			Contactos
		</Link>
		</div>
	</div>
);
