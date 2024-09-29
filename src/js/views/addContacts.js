import react, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContacts = () => {
  const { actions } = useContext(Context);
//   const [name, setName] = useState("");
  const handlerAddContact = () => {
    actions.addContacts({
      name: "test clases",
      phone: "812908908",
      email: "sentimientoleproso@gmail.com",
      address: "ayalagauna2424",
    })
  }
  return (
    <>
      <button onClick={handlerAddContact}>Add Contact</button>

      <link to="/contacts">Volver</link>
    </>
  );
};

export { AddContacts };
