import React from "react";

// https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

export default function Card(props){
    const card = props.card
  
    // React.useEffect(() => {
    //     const collection = JSON.parse(localStorage.getItem('collection'))
    //     localStorage.setItem('collection', JSON.stringify(items))
    // })
 
    // console.log('collection',items)


    return (
        <div className="card">
            <img src={props.img} alt={props.id} />
            <button className="card-btn" onClick={() => props.addCards(card)}>Add to Collection</button>
        </div>
    )
}