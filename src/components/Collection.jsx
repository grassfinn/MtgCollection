import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';

export default function Collection(props) {
  const user = 'GrassFinn';
  const localStorage = window.localStorage.getItem('collection');
  const localStorageObj = JSON.parse(localStorage) || [];

  function messages() {
    return <h2>Your Collection is Empty.</h2>;
  }

  const cardEle = localStorageObj.map((item, index) => {
    console.log(localStorageObj)
    return (
      <Card
        card={item}
        img={item.image_uris.normal}
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
