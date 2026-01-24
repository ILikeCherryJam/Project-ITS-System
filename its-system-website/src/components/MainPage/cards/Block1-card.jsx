import React, { useState } from 'react';
import './css/block1-card.css';



function Block1Card(props) {
    
    const [display, setDisplay] = useState(false);

    return (
        <li className="block1-card"
            onMouseEnter={() => {setDisplay(prev => true)}}
            onMouseLeave={() => {setDisplay(prev => false)}}   
            onClick={() => {setDisplay(prev => !prev)}}     
        >   
            <div className={display ? "card-main active" : "card-main"}>
                <img className="block1-card__image" 
                    src={props.img} 
                    alt='card-img'
                />
                <p className="block1-card__title no-select">{props.title}</p>
            </div>
            <div className={
                display ? "block1-card__descriptions active" : "block1-card__descriptions"
                }
            >
                <p className="block1-card__description no-select">{props.description}</p>
                <p className="block1-card__description no-select">{props.description2}</p>
            </div>
            <div
                className="more-btn no-select"
                
            >
              {display ? "Скрыть" : "Подробнее"}
            </div>
        </li>
    )
}

export default Block1Card