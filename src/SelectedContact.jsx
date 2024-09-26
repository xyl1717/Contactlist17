import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  console.log('Selected contact:', contact);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Website: {contact.website}</p>
      <h3>Address:</h3>
      <p>{contact.address.street}, {contact.address.suite}</p>
      <p>{contact.address.city}, {contact.address.zipcode}</p>
      <h3>Company:</h3>
      <p>{contact.company.name}</p>
      <p>{contact.company.catchPhrase}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
    </div>
  );
};

export default SelectedContact;