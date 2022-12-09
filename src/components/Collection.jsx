import React from 'react';
import Nav from './Nav';
import Card from './Card';
import App from '../App';
export default function Collection() {
  const [items, setItems] = React.useState([]);
  const user = 'GrassFinn';
  const localStorage = window.localStorage.getItem('collection');
  console.log('current cards', items);

  function removeCards(id) {
    localStorage.setItem('collection', JSON.stringify(items));
    setItems((prevItems) => prevItems.filter((card) => card.id !== id));
  }



  // || is setting a default value of an empty array if there is no localStorage
  // window.localStorage.clear(   )
  const localStorageObj = JSON.parse(localStorage) || [];

  console.log;
  console.log(window.location.pathname);

  function messages() {
    return <h2>Your Collection is Empty.</h2>;
  }

  const cardEle = localStorageObj.map((item, index) => {
    return (
      <Card
        card={item}
        img={item.imageUrl}
        id={index + 1}
        key={index + 1}
        removeCard={removeCards}
      />
    );
  });

  // window.localStorage.clear()

  return (
    <div>
      <Nav />
      <h1>{user}'s Collection</h1>
      <div className="cards-container">
        {localStorage ? cardEle : messages()}
      </div>
    </div>
  );
}
