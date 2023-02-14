import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';

// TODO
// if card is already in the collection show the number of cards you have or allow only one of each card.
export default function Collection(props) {
  const user = props.login.user;
  const localStorage = window.localStorage.getItem('collection');
  const localStorageObj = JSON.parse(localStorage) || [];
  console.log({props});

  // need to have the filter array reset at the start of the render cycle of the component
  React.useEffect(() => {
    props.setFilteredArray(props.items);
  }, []);

  
  let cardEle = (array) =>
    array.map((item, index) => {
      return (
        <Card
          card={item}
          img={item.image_uris.normal}
          id={item.id}
          key={index + 1}
          removeCards={props.removeCards}
          addCards={props.addCards}
        />
      );
    });

  // user clicks a button based on the cards color
  // filter through the collection array and display the cards that are of the chosen color
  function filterByColor(color) {
    // returns an array of the cards that have the color that I am wanting

    props.setFilteredArray((prevItems) => {
      // https://www.w3schools.com/jsref/jsref_filter.asp
      // Instead of filtering through prevItems, made to filter from the items array to make filtering works in all cases.
      const newItems = props.items.filter((item) =>
        item.colors.includes(color)
      );
      // if new items is not equal to zero then we want to return the filtered array
      if (newItems.length !== 0) {
        return newItems;
      }
      //  If no elements pass the test it returns an empty array. so we need to cover that option
      setMessage(messages);
      // setTimeout(setMessage(''),1000)
      return prevItems;
    });
  }

  function resetFilter() {
    props.setFilteredArray(props.items);
  }

  function messages(string) {
    return <h2>{string}</h2>;
  }

  return (
    <div>
      {props.login.login && 
      <div>

      <h1>{user}'s Collection</h1>
      <h2>Use the buttons below to filter your cards by color!</h2>
      <div className='filter-btn'>
        <button onClick={() => filterByColor('R')}>Red</button>
        <button onClick={() => filterByColor('W')}>White</button>
        <button onClick={() => filterByColor('U')}>Blue</button>
        <button onClick={() => filterByColor('B')}>Black</button>
        <button onClick={() => filterByColor('G')}>Green</button>
        <button onClick={resetFilter}>Reset Filter</button>
      </div>
      {/* check if filtered array then render  or if localstorage is there and render. */}
      <div className='cards-container'>
        {localStorage && cardEle(props.filteredArray || localStorageObj)}
      </div>
      </div>
      }

      { !props.items ||!props.login.login && messages('Your collection is empty or you are not logged in.')}
    </div>
  );
}
