import React from 'react';

// https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

export default function Card(props) {
  const { card, img, id, addCards, removeCards } = props;
  // const [hover, setHover] = React.useState(false)
  const currentCard = card;

  function isInCollection() {}

  return (
    <div
      className="card"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt={id} />
      <div className="overlay">Add to Collection</div>
      <button className="card-btn" onClick={() => addCards(currentCard)}>
        Add to Collection
      </button>
      <button className="card-btn" onClick={() => removeCards(currentCard)}>
        Remove from Collection
      </button>
    </div>
  );
}
