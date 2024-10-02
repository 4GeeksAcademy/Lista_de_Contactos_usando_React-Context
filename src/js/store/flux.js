const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			agenda: "octubre",
			selectedContact: null 
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			getAgenda: () => {

				const {agenda} = getStore();

				fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts`)
					.then(response => response.json())
					.then(data => setStore({contacts: data.contacts}));
					
				
				},
				addContact: (contact) => {
					const {agenda, contacts} = getStore();
					fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts`, {
					method: "POST",
					headers: {
						"content-type": "application/json" 
						
				},
				body: JSON.stringify(contact)
				}).then((response) => response.json()).then((data) => setStore({contacts: [...contacts, data]}))
				},

				deleteContact: (id) => {
					const {agenda, contacts} = getStore();
					fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"content-type": "application/json" 
					},
					}).then(() => {
						const newContacts = contacts.filter((contact) => contact.id !== id)
						setStore({contacts: newContacts})
					}).catch(e => { 
						console.log(e)
					})
				},

				// Nueva función para actualizar un contacto
				updateContact: (id, updatedContact) => {
					const { agenda, contacts } = getStore();
					
					// Hacemos la petición PUT para actualizar el contacto
					fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`, {
						method: "PUT",
						headers: {
							"content-type": "application/json"
						},
						body: JSON.stringify(updatedContact) // Pasamos los datos actualizados
					})
					.then(response => response.json())
					.then(data => {
						// Actualizamos el estado con el contacto modificado
						const updatedContacts = contacts.map(contact => {
							if (contact.id === id) {
								return data; // Reemplazamos el contacto actualizado
							}
							return contact;
						});
						setStore({ contacts: updatedContacts });
					})
					.catch(e => {
						console.log("Error actualizando el contacto:", e);
					});
				},

				// Nueva función para obtener un contacto individual por su ID
			getContact: (id) => {
				const { agenda } = getStore();
				
				// Realiza la solicitud GET para obtener los detalles de un contacto
				fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`)
					.then(response => response.json())
					.then(data => {
						// Actualiza el estado con el contacto seleccionado
						setStore({ selectedContact: data });
					})
					.catch(e => {
						console.log("Error obteniendo el contacto:", e);
					});
			},
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

