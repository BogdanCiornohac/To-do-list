import React from "react";
import './card.css'
import { MdDoneOutline } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
const Card = (props)=>{
    return (
        <div className="card">
            {props.name}
            <div className="buttons">
                <MdDoneOutline className="icon"/> 
                <BsTrash className="icon"/>  
            </div>
        </div>
    );
}

export default Card