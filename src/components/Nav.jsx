import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/MtgCollection/">Home</Link>

        <ul className="navbar">
          <li>
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
