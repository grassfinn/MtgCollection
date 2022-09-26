import React from "react";

    export default function Search(props){


    return (
        <div>
                <input type="text"
                value={userInput}
                onChange={(e => setUserInput(e.target.value))} />
                <button onClick={props.handleClick}>Search</button>
            <div>

            </div>
        </div>
    )
}