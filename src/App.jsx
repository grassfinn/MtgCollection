import { useState } from 'react';
import Search from './components/Search';
import Nav from './components/Nav';
import React from 'react';
import Card from './components/Card';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Collection from './components/Collection';
// const collection = JSON.parse(localStorage.getItem('collection'));

function App() {
  // console.log(Router)
  const context = React.createContext();
  const [items, setItems] = React.useState([]);
  console.log('current cards',items)

  function addCards(card) {
    localStorage.setItem('collection', JSON.stringify(items));
    setItems((prevCard) => [...prevCard, card]);
  }

  function removeCards(id) {
    localStorage.setItem('collection', JSON.stringify(items));
    setItems((prevItems) => prevItems.filter((card) => card.id !== id));
  }

  // when page loads it needs to react the localstorage and set to state
  React.useEffect(() => {
    // look at local storage
    const data = window.localStorage.getItem('collection');
    console.log(data)
    if (data === 'undefined') {
      window.localStorage.clear()
    }
    // grab local storage if it isnt null or undefined
    if (data !== null) {
      setItems(JSON.parse(data)) 
      
      // console.log({ items });
    }
    // set items equal to local storage
  }, []);
  // when the items array is changed it will run this code
  React.useEffect(() => {
    // turns the items into local storage so it can render it in the collection tab
    if (window.localStorage !== null) {
          localStorage.setItem('collection', JSON.stringify(items));
          console.log('localStorage', items);
    }
    
  }, [items]);

  // console.log(window)

  return (
    <div className="App">
      <Nav />
      <Search addCards={addCards} removeCards={removeCards} />
      {/* if not on home page do not show search bar */}
    </div>
  );
}

export default App;
