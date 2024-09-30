// import { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";

// const Contacts = () => {
//   const { store } = useContext(Context);

//   return (
//     <div>
//       <Link to="/addContact">Add Contact</Link>
//       {store.contacts.map((contact) => {
//         return <div key={contact.id}>{contact.name}</div>;
//       })}
//     </div>
//   );
// };

// export { Contacts };



import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contacts = () => {
    const { store, actions } = useContext(Context);

    // Cargar contactos al montar el componente
    useEffect(() => {
        actions.getAgenda();
    }, []);

    return (
        <div className="container mt-5">
            <h1>Lista de Contactos</h1>
            <Link to="/addContacts" className="btn btn-primary mb-3">
                Añadir Contacto
            </Link>
            <ul className="list-group">
                {store.contacts.length === 0 ? (
                    <li className="list-group-item">No hay contactos</li>
                ) : (
                    store.contacts.map(contact => (
                        <li key={contact.id} className="list-group-item d-flex justify-content-between">
                            <div>
                                <h5>{contact.full_name}</h5>
                                <p>Email: {contact.email}</p>
                                <p>Teléfono: {contact.phone}</p>
                                <p>Dirección: {contact.address}</p>
                            </div>
                            <button
                                onClick={() => actions.deleteContact(contact.id)}
                                className="btn btn-danger"
                            >
                                Eliminar
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export { Contacts };
