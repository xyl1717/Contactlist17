import React, { useState } from 'react';
import ContactList from './ContactList';
import SelectedContact from './SelectedContact';
import './App.css'

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact 
          selectedContactId={selectedContactId} 
          setSelectedContactId={setSelectedContactId} 
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
};

export default App;