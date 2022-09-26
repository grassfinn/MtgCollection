import React from "react";

export default function Card(props){
    function handleClick(){
        alert(props.key)
    }
    return (
        <div className="card">
            <img src={props.img} alt={props.key} />
            <button className="card-btn" onClick={handleClick}>Add to Collection</button>
        </div>
    )
}