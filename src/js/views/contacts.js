import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const contacts = () => {
    const {store} = useContext(Context);
    
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
