import { useContext } from "react";
import {context} from /workspaces/Lista_de_Contactos_usando_React-Context/src/js/store/appContext.js;
import { Link } from "react-router-dom";

const contacts = () => {
    const {store} = useContext(context);
    
    return (
        <div>
            <link to= {"/addContact"}></link>
            {store.contacts.map((contact  =>{
                return (

                    <div>
                    {contact.name}
                </div>

                )
}))}
        </div>
    )
}

export {contacts}
