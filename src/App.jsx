import { useState } from 'react'
import Search from './components/Search'
import React from 'react'
import Card from './components/Card'
import './App.css'

// https://blog.logrocket.com/guide-features-updates-react-devtools/
// https://jsramblings.com/are-you-logging-the-state-immediately-after-updating-it-heres-why-that-doesnt-work/






function App() {
      const [search, setSearch] = React.useState({})
      const [userInput, setUserInput] = React.useState('')
      const [load, setLoad] = React.useState(false)

      const [items, setItems] = React.useState([]);
    
      
     function addCards(card){
        setItems(prevCard => [...prevCard, card])
        }


      async function logCollection() {
        await console.log(items)
      }
        // when the items array is changed it will run this code
        React.useEffect(() => {
          // turns the items into local storage so it can render it in the collection tab
          localStorage.setItem('collection', JSON.stringify(items))
          logCollection()
      }, [items])
  
      async function apiCall(cardName){
          setLoad(false)
          const res = await fetch(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
          const data = await res.json()
          setSearch(data)
          setLoad(true) 
        }
        
        function handleClick(){
          apiCall(userInput)
      }


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
            return <Card  card={item} img={item.imageUrl} id={index + 1} key={index + 1} addCards={addCards}/>
          }
        })}     
      </div>
    </div>
  )
}

export default App
