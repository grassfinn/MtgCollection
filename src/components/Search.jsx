import React from 'react';
import Card from './Card';

export default function Search(props) {
  const { card, img, id, addCards, removeCards } = props;

  const [load, setLoad] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');
  const [search, setSearch] = React.useState({});

  async function apiCall(cardName) {
    setLoad(false);
    const res = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${cardName}`
    );
    const data = await res.json();
    setSearch(data);
    setLoad(true);
  }

  function handleClick(e) {
    apiCall(userInput);
  }

  return (
    <div>
      <h1>Enter a Magic Card!</h1>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => handleClick(userInput)}>Search</button>
      <div className="cards-container">
        {/* if load is true then map through the array and return a card for each item */}
        {load &&
          search.cards.map((item, index) => {
            if (item.hasOwnProperty('imageUrl')) {
              // cardArray.push(item)
              return (
                // return props for the Card component
                <Card
                  //   collection={items}
                  card={item}
                  img={item.imageUrl}
                  id={index + 1}
                  key={index + 1}
                  addCards={addCards}
                  removeCards={removeCards}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
