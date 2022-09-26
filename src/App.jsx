import { useState } from 'react'
import Search from './components/Search'
import React from 'react'
import Card from './components/Card'
import './App.css'








function App() {
      const [search, setSearch] = React.useState({})
      const [userInput, setUserInput] = React.useState('')
      const [load, setLoad] = React.useState(false)
      const cardArray = []

  
      // React.useEffect(() => {
      //     apiCall(userInput)
          
      // }, [])
  
      async function apiCall(cardName){
          setLoad(false)
          const res = await fetch(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
          const data = await res.json()
          setSearch(data)
          setLoad(true) 
        }
        
        async function handleClick(){
          await apiCall(userInput)
      }
      console.log(search.cards)

  return (
    <div className="App">
      {/* <Nav/> */}
      <h1>Enter a Magic Card!</h1>
      <input type="text"  value={userInput} onChange={(e) => setUserInput(e.target.value)}/>

      <button onClick={handleClick}>Search</button>

      <div className='cards-container'>
        {/* if load is true then map through the array and return a card for each item */}
        {load && search.cards.map((item, index) => {
          if (item.hasOwnProperty('imageUrl')) {
            // cardArray.push(item)
            return <Card img={item.imageUrl} key={index + 1} />
          }
        })}     
      </div>
    </div>
  )
}

export default App
