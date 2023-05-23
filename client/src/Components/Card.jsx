import React from "react";
import './card.css'
import { MdDoneOutline } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';




const Card = (props) => {

    const deleteCard = (ind) => {
        fetch('http://localhost:5000/api', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ind})
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          props.setData(data)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    return (
        <div className="card">
            {props.name}
            <div className="buttons">
                <MdDoneOutline className="icon" />
                <BsTrash className="icon" onClick={()=>{deleteCard(props.index);console.log(props.index)}} />
            </div>
        </div>
    );
}

export default Card