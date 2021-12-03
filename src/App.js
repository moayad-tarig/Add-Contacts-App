import React, { useState } from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import AddItems from './components/AddItems/AddItems';
import { Component } from 'react';
import Header from './components/Header/Header';
import SearchBox from './components/searchBox/SearchBox';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'



function App(){
  const [count, setCount] = useState(0)
  const [contacts, setContacts] = useState(read_cookie("contacts"))
  const [searchField, setSearchField] = useState("")
  const [filterFirst, setFilterFirst] = useState([])


  function addContact(e) {
    
    setCount(prev => prev + 1)
    e.id = count
    setContacts(prev => [...prev, e])
    bake_cookie("contacts", e)
   
  }

// -----------------------***************************************------------------------
  //   search here 
  
 function handleTyping (e) {
    setSearchField(e.target.value)
  }
  
  function handleSearch(e) {
      e.preventDefault();
      const Fuck = contacts.filter(e => e.first.includes(searchField))
      setFilterFirst(Fuck)
}

function deleteContact(id) {
    setContacts(()=> contacts.filter((e) => {
      return(e.id !== id)
    }))
    
  } 
  bake_cookie("contacts", contacts)
  

    return (
      <div className="App">
      <Header />
      
        <SearchBox handleSearch={handleSearch} handleTyping={handleTyping} />
        <div className="container">
            {console.log(contacts)}
            <AddItems addContact={addContact}/>
            <ListItems contacts={contacts} DeleteContact={deleteContact} filterFirst={filterFirst} />
        </div>
      </div>
    );
  
}

export default App;
