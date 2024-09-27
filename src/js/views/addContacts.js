import react, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContacts = () => {
    const  {actions} = useContext(Context);
    const [name, setName] = useState("")
    const handlerAddContact = () => {
        actions.AddContacts({

        })
    }
    return (
        <>
        <button onClick={handlerAddContact}>Add Contact</button> 

        <link to="/contacts">Volver</link>

        </>
    )
}

export {AddContacts}
