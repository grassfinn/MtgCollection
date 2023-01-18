import React from 'react';
import Search from './Search';
import Login from './Login';
export default function Homepage(props) {
  return (
    <div>
      <h1>
        CardStacks is a MtG collection app that makes keeping track of your
        collection with ease!
      </h1>
      <h3>
        This site is a currently in phase 1, You can read about the dev log in
        the about us tab.{' '}
      </h3>
      {/* when login is false show the login screen */}
      {!props.login && <Login login={props.login} setLogin={props.setLogin} />}
      {/*  when login is true show the search*/}
      {props.login && (
        <Search addCards={props.addCards} removeCards={props.removeCards} />
      )}
    </div>
  );
}
