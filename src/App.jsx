import Nav from './components/Nav';
import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';
import Collection from './components/Collection';

function App() {
  const location = useLocation();

  const localStorage = window.localStorage;
  // connect the state to local storage and an empty array if local storage is empty
  const [items, setItems] = React.useState(
    // turn local storage into a JS obj
    JSON.parse(localStorage.getItem('collection')) || []
  );

  // add the card as well as the rest of the previous cards and set the collection item of local storage
  function addCards(card) {
    setItems((prevItems) => {
      const newItems = [...prevItems, card];
      // turn locale storage into a string
      localStorage.setItem('collection', JSON.stringify(newItems));
      return newItems;
    });
  }

  // filter through the unwanted card and remove it from the array of cards as well as set the collection item of local storage
  function removeCards(card) {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== card.id);
      localStorage.setItem('collection', JSON.stringify(newItems));
      return newItems;
    });
  }

  // updates local storage when items state changes
  React.useEffect(() => {
    // turns the items into local storage so it can render it in the collection tab
    if (window.localStorage !== null) {
      // when the collection changes I need to get the local storage and set the State
      localStorage.setItem('collection', JSON.stringify(items));
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
