import { useState, useEffect } from "react";
import { nanoid } from "nanoid/non-secure";

import FormName from "./componentBook/ListContacts/FormName.js";
import ListContacts from "./componentBook/ListContacts/ListContacts.js";

function PhoneBook (){
  const [contacts, setContacts] = useState([])

  const addToContacts = (name, number) => {
    const contact = { id: nanoid(), name, number };
    setContacts([...contacts, contact]);
    
    return contacts;
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  useEffect(() => {
    const contactsFromLocalStorage = window.localStorage.getItem("contacts")
    if (contactsFromLocalStorage) {     
      setContacts(JSON.parse(contactsFromLocalStorage))
    }
  },[])

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <div>
            <FormName add={addToContacts} data={contacts} />
          </div>
          <ListContacts data={contacts} deleteing={deleteContact} />
        </div>
        <div>

        </div>
      </>
    );

}

export default PhoneBook;