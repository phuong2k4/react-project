import { useState } from "react";
import ContactList from "./ContactList.jsx";
import EditContact from "./EditContact.jsx";
import "./styles.css"

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  // const [selectedContact, setSelectedContact] = useState("");
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find((c) => c.id === selectedId);

  // setSelectedContact((contact) => {
  //   contact = contacts.find((c) => {
  //     c.id === selectedId;
  //   });
  // });
  function handleSave(updatedData) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }
  console.log(selectedContact);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
