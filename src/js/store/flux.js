import { stringify } from "query-string";

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
			agenda: "octubre"
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
					const [agenda, contacts] = getStore();
					fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts`, {
					method: "POST",
					Headers: {
						"content-type": "application/json" 
				},
				body: JSON.stringify(contact)
				}).then((response) => response.json()).then((data) => setStore({contacts: [...contacts, data]}))
				},

				deleteContact: (id) => {
					const {agenda, contacts} = getStore();
					fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`, {
						method: "DELETE"
					})
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
