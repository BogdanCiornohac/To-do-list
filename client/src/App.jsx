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


  const handleSubmit = () => {
    const incercare = {
      text: newText,
      done: false
    }

    if (newText == '') {
      alert('You can not add an empty note')
    } else {
      fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(incercare)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setBackendData(data)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };
  return (
    <div className="container">
      <div className="input-container">
        <input className="input-td"
          value={newText}
          onChange={event => { setNewText(event.target.value) }}
          placeholder="Add something to do here..."
        />
        <button className="add-btn" onClick={handleSubmit}>Add ToDo</button>
      </div>
      <div className="card-container">
        {typeof backendData.toDo === 'undefined' ? <p>Loading...</p> :
          backendData.toDo.map((text, index) => <Card key={index} name={backendData.toDo[index].text} />)}
      </div>
      <div className='spacer layer1'></div>
    </div>
  )
}

export default App
