import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';

export default function Collection(props) {
  const [collection, setCollection] = React.useState([...props.items]);
  // console.log(collection)
  const user = 'GrassFinn';
  const localStorage = window.localStorage.getItem('collection');
  const localStorageObj = JSON.parse(localStorage) || [];


  // || is setting a default value of an empty array if there is no localStorage
  // window.localStorage.clear(   )

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
        removeCards={props.removeCards}
        addCards={props.addCards}
      />
    );
  });

  return (
    <div>
      <h1>{user}'s Collection</h1>
      <div className="cards-container">{localStorage && cardEle}</div>
    </div>
  );
}
