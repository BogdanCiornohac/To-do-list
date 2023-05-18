import React, { useEffect, useState } from "react"
import Card from "./Components/Card";
import "./App.css"

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [newText, setNewText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => { setBackendData(data) })
  }, [])


  return (
    <div className="container">
      <div className="input-container">
        <input className="input-td" onChange={event => { setNewText(event.target.value) }} placeholder="Add something to do here..." ></input>
        {newText}
      </div>
      <div className="card-container">
        {typeof backendData.users === 'undefined' ? <p>Loading...</p> :
          backendData.users.map((user, index) => <Card key={index} name={user} />)}
      </div>
      <div className='spacer layer1'></div>
    </div>
  )
}

export default App
