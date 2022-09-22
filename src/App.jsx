import { useState } from 'react'
import Search from './components/Search'
import reactLogo from './assets/react.svg'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Search />
    </div>
  )
}

export default App
