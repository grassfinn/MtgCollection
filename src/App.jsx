import Nav from './components/Nav';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';
import Collection from './components/Collection';
import About from './components/About';

function App() {
  const location = useLocation();

  const localStorage = window.localStorage;
  // connect the state to local storage and an empty array if local storage is empty
  const [items, setItems] = React.useState(
    // turn local storage into a JS obj
    JSON.parse(localStorage.getItem('collection')) || []
  );
  const [filteredArray, setFilteredArray] = React.useState(items);
  function addCards(card) {
    // https://bobbyhadz.com/blog/react-check-if-element-exists-in-array
    // check if the card is already in the array
    const isFound = items.some((element) => {
      if (element.id === card.id) {
        console.log(`${element.name}`);
        return true;
      }
    });

    if (!isFound) {
      // add the card as well as the rest of the previous cards and set the collection item of local storage
      setItems((prevItems) => {
        const newItems = [...prevItems, card];
        // turn locale storage into a string
        localStorage.setItem('collection', JSON.stringify(newItems));
        console.log(`${card.name} IS NOT in the collection.`);
        return newItems;
      });
    }
    console.log(`${card.name} IS IN the collection.`);
    return items;
  }

  // filter through the unwanted card and remove it from the array of cards as well as set the collection item of local storage
  function removeCards(card) {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== card.id);
      localStorage.setItem('collection', JSON.stringify(newItems));
      return newItems;
    });
  }

  React.useEffect(() => {
    setItems(items);
  }, []);
  // updates local storage when items state changes
  React.useEffect(() => {
    // turns the items into local storage so it can render it in the collection tab
    if (window.localStorage !== null) {
      // when the collection changes I need to get the local storage and set the State
      localStorage.setItem('collection', JSON.stringify(items));
      setFilteredArray(items);
      console.log('reload');
      // setItems(JSON.parse(storedItems))
      // console.log({filteredArray})
    }
  }, [items]);

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path="/MtgCollection/"
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
            path='/about/'
            element={About('phase1')}
            >

          </Route>
          <Route
            path="/collection/"
            element={
              <Collection
                items={items}
                setItems={setItems}
                removeCards={removeCards}
                addCards={addCards}
                filteredArray={filteredArray}
                setFilteredArray={setFilteredArray}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
