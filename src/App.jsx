import Nav from './components/Nav';
import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Homepage from './components/Home';
import Collection from './components/Collection';

function App() {
  const location = useLocation();

  const [items, setItems] = React.useState([]);

  function addCards(card) {
    localStorage.setItem('collection', JSON.stringify(items));
    setItems((prevCard) => [...prevCard, card]);
  }

  function removeCards(card) {
    
    window.localStorage.setItem('collection', JSON.stringify(items));
    setItems((prevItems) => prevItems.filter((item) => item.id !== card.id));
  }

  // when page loads it needs to react the localstorage and set to state
  React.useEffect(() => {
    // look at local storage
    const data = window.localStorage.getItem('collection');
    setItems(JSON.parse(data))
    if (data === 'undefined') {
      // window.localStorage.clear();
    }
    // grab local storage if it isnt null or undefined
    if (data !== null) {
      setItems(JSON.parse(data));
    }
    // set items equal to local storage
  }, []);
  // when the items array is changed it will run this code
  React.useEffect(() => {
    // turns the items into local storage so it can render it in the collection tab
    if (window.localStorage !== null) {
      window.localStorage.setItem('collection', JSON.stringify(items));
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
