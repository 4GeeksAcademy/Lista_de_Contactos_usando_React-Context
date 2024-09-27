import react, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContacts = () => {
    const  {actions} = useContext(Context);
    const [name, setName] = useState("")
    const handlerAddContact = () => {
        actions.AddContacts({

            name: name,
            phone: 854732192,
            adress: 

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
