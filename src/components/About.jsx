import React from 'react';

export default function About(props) {
  return (
    <section className="flex-col">
      <h1>About Card Stacks</h1>
      <p>
        Card Stacks aims to be a simple way for magic players to keep up with
        their collection of cards via on desktop or mobile. I aim to keep the
        process as simple as search for your card and click to add to your
        collection. This project is currently being created by one person so be
        patient in the progress of the app. This site is currently in phase{' '}
        {props.phase}. I plan to add more features as time goes on.
      </p>
      <h2>Current Features</h2>
      <ul>
        <li>Card search via card name.</li>
        <li>
          Add cards to collection and stored through the browser's local storage
        </li>
        <li>
          Remove cards from collection and update the browser's local storage
        </li>
        <li>Filter cards by color</li>
        <li>Life Tracker</li>
      </ul>
      <h3>Road map for future phases </h3>
      <ul>
        <li>Add user creation and server storage for collection</li>
        <li>Deck builder with W/L tracking</li>
        <li>Card draw probability calculator</li>
        <li>Random MtG related games</li>
      </ul>
      <p>
        If you are interested contributing you can communicate to me through the
        GitHub's repo issues
        <a
          target="_blank"
          href="https://github.com/grassfinn/MtgCollection/issues"
        >
          Card StackS Repo
        </a>
      </p>
    </section>
  );
}
