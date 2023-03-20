import React from 'react';
import { useLocation } from 'react-router-dom';

// https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
// https://unused-css.com/blog/css-shake-animation/

// TODO
// Select Multiple Cards and have a button that adds them all to collection

export default function Card(props) {
  const { card, img, id, name, addCards, removeCards, price } = props;
  // console.log(card)
  // const [hover, setHover] = React.useState(false)
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const currentCard = card;
  const location = useLocation();
  const messageContent = `${name} has been added to you collection!`;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 2000);
    // must clear the time out
    return () => clearTimeout(timer);
  }, [message]);

  const cardEle = (
    <div
      className="card"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt={name} id={id} />
      {/* <h2>price:{price === null ? "MtGA" : ` $${price}`}</h2> */}
      <div className="overlay">
        {/* <i className="fa-solid fa-plus"></i> */}
        {/* <i className="fa-solid fa-trash"></i> */}
      </div>
      {/* have the add in an overlay as well as the add and remove rendered based on the route location */}
      {/* have the buttons appear based on the pathname they are in */}

      {/* <p>{count}</p> */}
    </div>
  );

  return (
    <div>
      {location.pathname !== '/MtgCollection/' ? (
        <div
          className="card"
        >
          <img src={img} alt={name} id={id} />
          {/* <h2>price:{price === null ? "MtGA" : ` $${price}`}</h2> */}
          <p>{card.count}</p>
          <div className="overlay">
            {/* <i className="fa-solid fa-plus"></i> */}
            {/* <i className="fa-solid fa-trash"></i> */}
          </div>
          {/* have the add in an overlay as well as the add and remove rendered based on the route location */}
          {/* have the buttons appear based on the pathname they are in */}

        </div>
      ) : (
        cardEle
      )}
      <div className="card-msg">
        <p>{message}</p>
        {location.pathname !== '/collection' ? (
          <button
            className="card-btn"
            onClick={() => {
              document.getElementById(`${id}`).classList.add('added');
              setMessage(messageContent);
              addCards(currentCard);
            }}
          >
            Add to Collection
          </button>
        ) : (
          ''
        )}
        {location.pathname !== '/MtgCollection/' ? (
          <div>
            <button
              className="card-btn"
              onClick={() => removeCards(currentCard)}
            >
              Remove from Collection
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
