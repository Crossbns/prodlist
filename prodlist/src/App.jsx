import { useState } from 'react';
import './App.css';
import Home from './Home';
import Habits from './Habits';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Home/>
     <Habits/>
    </div>
  )
}

export default App
