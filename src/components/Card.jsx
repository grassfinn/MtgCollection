import React from 'react';
import { useLocation } from 'react-router-dom';

// https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
// https://unused-css.com/blog/css-shake-animation/

// TODO
// Select Multiple Cards and have a button that adds them all to collection



export default function Card(props) {
  const { card, img, id, name, addCards, removeCards, price, setMessage } = props;
  // const [hover, setHover] = React.useState(false)
  const [count, setCount] = React.useState(0);
  const currentCard = card;
  const location = useLocation();
  const message = `${name} has been added to you collection!`
  return (
    <div
      className="card"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt={name} id={id} />
      {/* <h2>price:{price === null ? 'MtGA' :` $${price}`}</h2> */}
      <div className="overlay">
        {/* <i className="fa-solid fa-plus"></i> */}
        {/* <i className="fa-solid fa-trash"></i> */}
      </div>
      {/* have the add in an overlay as well as the add and remove rendered based on the route location */}
      {/* have the buttons appear based on the pathname they are in */}
      {location.pathname !== '/collection' ? (
        <button
          className="card-btn"
          onClick={() => {
            document.getElementById(`${id}`).classList.add('added')
            setMessage(message)
            addCards(currentCard);
            // setCount(prevValue => prevValue + 1)
          }}
        >
          Add to Collection
        </button>
      ) : (
        ''
      )}
      {location.pathname !== '/' ? (
        <button className="card-btn" onClick={() => removeCards(currentCard)}>
          Remove from Collection
        </button>
      ) : (
        ''
      )}
      {/* <p>{count}</p> */}
    </div>
  );
}
