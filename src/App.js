import React from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import AddItems from './components/AddItems/AddItems';
import { Component } from 'react';
import Header from './components/Header/Header';
import SearchBox from './components/searchBox/SearchBox';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'


class App extends React.Component{
  
   
  state = {
    count: 0,
    contacts: read_cookie("contacts"),
    searchField: "",
    FilterFirst:[]
  }
  addContact = (e) => {
    let contacts = this.state.contacts
    let count = this.state.count
    count = count + 1
    e.id = count
    contacts.push(e)
    
    this.setState({ contacts, count })
    bake_cookie("contacts", this.state.contacts)
    
  }

// -----------------------***************************************------------------------
  //   search here 
  
  handleTyping = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  
  handleSearch = (e) => {
      const {contacts, searchField} = this.state;
      e.preventDefault();

      const Fuck = this.state.contacts.filter(e => e.first.includes(this.state.searchField))
      this.setState({FilterFirst: Fuck})
      console.log(this.state, Fuck)
    
}
// -----------------------***************************************------------------------

  deleteContact = (id) => {
    let contacts = this.state.contacts.filter((e) => {
      return(e.id !== id)
    })
    this.setState({contacts})
    bake_cookie("contacts", contacts)
  } 
  

  render(){
    
    return (
      <div className="App">
      <Header />
      
      <SearchBox handleSearch={this.handleSearch} handleTyping={this.handleTyping} />
        <div className="container">
         {console.log(this.state)}
            <AddItems addContact={this.addContact}/>
            <ListItems contacts={this.state.contacts} DeleteContact={this.deleteContact} FilterFirst={this.state.FilterFirst} />
            

        </div>
      </div>
    );
  }
}

export default App;
