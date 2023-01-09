import React from 'react';
import Card from './Card';

export default function Search(props) {
  const { card, img, id, addCards, removeCards } = props;

  const [load, setLoad] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');
  const [search, setSearch] = React.useState({});
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 2000);
    // must clear the time out
    return () => clearTimeout(timer);
  }, [message]);

  async function apiCall(cardName) {
    const scryfall = `https://api.scryfall.com/cards/search?q=${cardName}`;
    setLoad(false);

    const res = await fetch(
      // `https://api.magicthegathering.io/v1/cards?name=${cardName}`
      scryfall
    );
    // if the call did not go through alert
    if (res.status === 404) {
      alert('please write a card name');
      return;
    }

    const data = await res.json();

    setSearch(data);
    setLoad(true);
  }

  function handleKeyPress(e) {
    // stop code if any key that is not enter
    if (e.key !== 'Enter' || !userInput) {
      return;
    }
    apiCall(userInput);
    setUserInput('');
  }

  function handleClick() {
    if (!userInput) {
      return;
    }
    apiCall(userInput);
  }

  return (
    <div>
      <h2>Enter a Magic Card!</h2>

      <input
        type="text"
        value={userInput}
        onKeyDown={handleKeyPress}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => handleClick(userInput)}>Search</button>
      <p>{message}</p>
      <div className="cards-container">
        {/* if load is true then map through the array and return a card for each item */}
        {load &&
          search.data.map((item, index) => {
            // some of the items did not have the image_uri object so you need to check and filter them out!
            if (item.hasOwnProperty('image_uris')) {
              // console.log(item.prices.usd);
              return (
                // return props for the Card component
                <Card
                  card={item}
                  name={item.name}
                  img={item.image_uris.normal}
                  id={item.id}
                  key={index + 1}
                  addCards={addCards}
                  removeCards={removeCards}
                  // price={item.prices.usd}
                  setMessage={setMessage}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
