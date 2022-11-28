import { useState } from 'react';
import Search from './components/Search';
import Nav from './components/Nav';
import React from 'react';
import Card from './components/Card';
import './App.css';

// const collection = JSON.parse(localStorage.getItem('collection'));

function App() {
  const [search, setSearch] = React.useState({});
  const [userInput, setUserInput] = React.useState('');
  const [load, setLoad] = React.useState(false);

  const [items, setItems] = React.useState([]);

  function addCards(card) {
    setItems((prevCard) => [...prevCard, card]);
    localStorage.setItem('collection', JSON.stringify(items));
  }

  // when page loads it needs to react the localstorage and set to state
  React.useEffect(() => {
    // look at local storage
    const data = window.localStorage.getItem('collection');
    if (data === null) {
      console.log('123');
    }
    // grab local storage if it isnt null or undefined
    if (data !== null) {
      setItems(JSON.parse(data))
      console.log({items})
    }
    // set items equal to local storage
  }, []);

  // when the items array is changed it will run this code
  React.useEffect(() => {
    // turns the items into local storage so it can render it in the collection tab
    if (window.localStorage !== null) {
    }
    console.log('localStorage', items);
  }, [items]);

  async function apiCall(cardName) {
    setLoad(false);
    const res = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${cardName}`
    );
    const data = await res.json();
    setSearch(data);
    setLoad(true);
  }

  function handleClick() {
    apiCall(userInput);
  }

  return (
    <div className="App">
      <Nav />
      <h1>Enter a Magic Card!</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button onClick={handleClick}>Search</button>

      <div className="cards-container">
        {/* if load is true then map through the array and return a card for each item */}
        {load &&
          search.cards.map((item, index) => {
            if (item.hasOwnProperty('imageUrl')) {
              // cardArray.push(item)
              return (
                // return props for the Card component
                <Card
                  card={item}
                  img={item.imageUrl}
                  id={index + 1}
                  key={index + 1}
                  addCards={addCards}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default App;
