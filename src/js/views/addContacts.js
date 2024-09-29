// import { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";

// const AddContacts = () => {
//   const { actions } = useContext(Context);

//   const handlerAddContact = () => {
//     actions.addContact({
//       name: "test clases",
//       phone: "812908908",
//       email: "sentimientoleproso@gmail.com",
//       address: "ayalagauna2424",
//     });
//   };

//   return (
//     <>
//       <button onClick={handlerAddContact}>Add Contact</button>
//       <Link to="/contacts">Volver</Link>
//     </>
//   );
// };

// export { AddContacts };

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const AddContacts = () => {
  const { actions } = useContext(Context);
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", address: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(form);
    navigate("/contacts"); // Redirigir a la lista de contactos después de añadir
  };

  return (
    <div className="container mt-5">
      <h1>Añadir Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre Completo</label>
          <input
            type="text"
            name="full_name"
            className="form-control"
            value={form.full_name}
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
        <button type="submit" className="btn btn-primary">Guardar Contacto</button>
        <Link to="/contacts" className="btn btn-secondary ms-3">Volver</Link>
      </form>
    </div>
  );
};

export { AddContacts };
