import React from 'react';
import Card from './Card';

export default function Search(props) {
  const { card, img, id, addCards, removeCards } = props;

  const [load, setLoad] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');
  const [search, setSearch] = React.useState({});

  async function apiCall(cardName) {
    const scryfall = `https://api.scryfall.com/cards/search?q=${cardName}`;
    setLoad(false);
    const res = await fetch(
      // `https://api.magicthegathering.io/v1/cards?name=${cardName}`
      scryfall
    );
    const data = await res.json();
    console.log(data);
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
          search.data.map((item, index) => {
            // some of the items did not have the image_uri object so you need to check and filter them out!
            if (item.hasOwnProperty('image_uris')) {
              console.log(item.prices.usd)
              return (
                // return props for the Card component
                <Card
                  //   collection={items}
                  card={item}
                  name={item.name}
                  img={item.image_uris.normal}
                  id={index + 1}
                  key={index + 1}
                  addCards={addCards}
                  removeCards={removeCards}
                  price={item.prices.usd}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
