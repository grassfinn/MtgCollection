import Nav from './components/Nav';
import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';
import Collection from './components/Collection';

function App() {
  const location = useLocation();

  // collection of cards
  const localStorage = window.localStorage
  // state connected to local storage and if empty makes it a empty array
  const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('collection')) || [] );


  function addCards(card) {
    setItems(prevItems => {
      const newItems = [...prevItems, card]
      localStorage.setItem('collection', JSON.stringify(newItems));
      return newItems
    });
  }
  
  function removeCards(card) {
    setItems(prevItems => {
      const newItems = prevItems.filter((item) => item.id !== card.id);
      localStorage.setItem('collection', JSON.stringify(newItems));
      return newItems
    });
    
  }

  React.useEffect(() => {
    // turns the items into local storage so it can render it in the collection tab
    if (window.localStorage !== null) {
      // when the collection changes I need to get the local storage and set the State
      window.localStorage.setItem('collection', JSON.stringify(items));
      // setItems(JSON.parse(storedItems))
    }
  }, [items]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              addCards={addCards}
              removeCards={removeCards}
              collection={items}
              setCollection={setItems}
            />
          }
        />
        <Route
          path="/collection/"
          element={
            <Collection
              items={items}
              setItems={setItems}
              removeCards={removeCards}
              addCards={addCards}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
