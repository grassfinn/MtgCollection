import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>

        <ul className="navbar">
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>{!props.login.login ? <Link to="/login">Login</Link> : <span className='logout' onClick={() => props.setLogin(!props.login)}>Log Out</span>}</li>
        </ul>
      </nav>
    </div>
  );
}
