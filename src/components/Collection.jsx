import React from "react";
import Nav from "./Nav";
import Card from "./Card";

export default function Collection(){
    
    const localStorage = window.localStorage.getItem('collection')

    const localStorageObj = JSON.parse(localStorage)

    const cardEle = localStorageObj.map((item, index) => {
        return (

                <Card 
                    card={item}
                    img={item.imageUrl}
                    id={index + 1}
                    key={index + 1}  
                />
        )
    })

    return (
        <div>
            <Nav />
            <h1>Your collection will show here</h1>
            <div className="cards-container">

                {cardEle}
            </div>

        </div>
        
    )
}

