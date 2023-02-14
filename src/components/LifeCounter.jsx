import { useState } from 'react';
import '../styles/lifeCounter.css'

function LifeCounter() {
  const [playerOneLife, setPlayerOneLife] = useState(20);
  const [playerTwoLife, setplayerTwoLife] = useState(20);

  function minus(e) {
    console.log(e.target.id);
    if (e.target.id === 'player-one-minus') {
      setPlayerOneLife((prevCount) => prevCount - 1);
      return;
    }
    setplayerTwoLife((prevCount) => prevCount - 1);
  }

  function plus(e) {
    if (e.target.id === 'player-one-plus') {
      setPlayerOneLife((prevCount) => prevCount + 1);
      return;
    }
    setplayerTwoLife((prevCount) => prevCount + 1);
  }

  function reset() {
    setPlayerOneLife(20);
    setplayerTwoLife(20);
  }

  return (
    <div>
      <main className="game">
        <div className="player-one">
          <div className="controls">
            <div className="minus" id="player-one-minus" onClick={minus}></div>
            <div className="plus" id="player-one-plus" onClick={plus}></div>
            <h1 className="player-one-life">{playerOneLife}</h1>
          </div>
        </div>

        <div className="player-two">
          <div className="controls">
            <div className="minus" onClick={minus}></div>
            <div className="plus" onClick={plus}></div>
            <h1 className="player-two-life">{playerTwoLife}</h1>
          </div>
        </div>

        <div className="reset" onClick={reset}>
          {' '}
          reset
        </div>
      </main>
    </div>
  );
}

export default LifeCounter;
