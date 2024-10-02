import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contacts = () => {
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false); // Para controlar la visibilidad del modal
    const [form, setForm] = useState({ full_name: "", email: "", phone: "", address: "" }); // Para manejar el formulario
    const [currentId, setCurrentId] = useState(null); // Para guardar el ID del contacto que se va a editar

    // Cargar contactos al montar el componente
    useEffect(() => {
        actions.getAgenda();
    }, []);

    // Abrir el modal y prellenar el formulario con los datos del contacto seleccionado
    const handleEdit = (contact) => {
        setForm({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address,
        });
        setCurrentId(contact.id); // Guardar el ID del contacto actual
        setShowModal(true); // Mostrar el modal
    };

    // Manejar cambios en el formulario del modal
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Guardar los cambios y actualizar el contacto
    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateContact(currentId, form); // Llamar a la acción de actualizar
        setShowModal(false); // Cerrar el modal después de guardar
    };

    return (
        <div className="container mt-5">
            <h1>Lista de Contactos</h1>
            <div className="d-flex justify-content-between mb-3">
                <Link to="/addContacts" className="btn btn-primary">
                    Añadir Contacto
                </Link>
                {/* Botón para regresar al Home */}
                <Link to="/" className="btn btn-secondary">
                    Volver 
                </Link>
            </div>
            <ul className="list-group">
                {store.contacts.length === 0 ? (
                    <li className="list-group-item">No hay contactos</li>
                ) : (
                    store.contacts.map(contact => (
                        <li key={contact.id} className="list-group-item d-flex justify-content-between">
                            <div>
                                <h5>{contact.name}</h5>
                                <p>Email: {contact.email}</p>
                                <p>Teléfono: {contact.phone}</p>
                                <p>Dirección: {contact.address}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleEdit(contact)} // Editar contacto
                                    className="btn btn-warning me-2"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => actions.deleteContact(contact.id)}
                                    className="btn btn-danger"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>

            {/* Modal para editar el contacto */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Editar Contacto</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)} // Cerrar el modal
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label>Nombre Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Teléfono</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Dirección</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={form.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Guardar Cambios
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary ms-3"
                                        onClick={() => setShowModal(false)} // Cerrar modal sin guardar
                                    >
                                        Cancelar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { Contacts };
