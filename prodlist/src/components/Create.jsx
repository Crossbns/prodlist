import React, {useState} from 'react'
import axios from 'axios'

function Create({ type }) {
  const [item, setItem] = useState()
  const handleAdd = () => {
    const url = type === 'task' ? 'http://localhost:3001/tasks/add' : 'http://localhost:3001/habits/add';
    axios.post(url, {item: item})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="create_form">
        <input type="text" placeholder={`Ingresa un ${type}`} onChange={(e) => setItem(e.target.value)}/> 
        <button type="button" onClick={handleAdd}>Agregar</button>
    </div>
  )
}

export default Create
