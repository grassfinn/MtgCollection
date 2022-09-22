import React from "react";

export default function Search() {
    const [search, setSearch] = React.useState({})
    const [userInput, setUserInput] = React.useState('')


    // React.useEffect(() => {
    //     apiCall(userInput)
        
    // }, [])

    async function apiCall(cardName){
        const res = await fetch(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
        const data = await res.json()
        return setSearch(data)   
    }
console.log(search)

    function handleClick(){
        apiCall(userInput)
    }



    return (
        <div>
                <input type="text"
                value={userInput}
                onChange={(e => setUserInput(e.target.value))} />
                <button onClick={handleClick}>Search</button>
            <div>

            </div>
        </div>
    )
}