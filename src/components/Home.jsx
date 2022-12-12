import React from 'react';
import Search from './Search';
export default function Homepage(props) {
  return (
    <div>
      <Search addCards={props.addCards} removeCards={props.removeCards}/>
    </div>
  );
}
