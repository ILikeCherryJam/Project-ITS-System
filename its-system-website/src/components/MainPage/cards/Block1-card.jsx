import React, { useState } from 'react';
import './css/block1-card.css';



function Block1Card(props) {
    
    const [display, setDisplay] = useState(false);

    return (
        <li className="block1-card"
            onMouseEnter={() => {setDisplay(prev => true)}}
            onMouseLeave={() => {setDisplay(prev => false)}}    
        >   
            <div className={display ? "card-main active" : "card-main"}>
                <img className="block1-card__image" 
                    src={props.img} 
                    alt='card-img'
                />
                <p className="block1-card__title">{props.title}</p>
            </div>
            <div className={
                display ? "block1-card__descriptions active" : "block1-card__descriptions"
                }
            >
                <p className="block1-card__description">{props.description}</p>
                <p className="block1-card__description">{props.description2}</p>
            </div>
            <div
                className="more-btn"
                onClick={() => {setDisplay(prev => !prev)}}
            >
              {display ? "Скрыть" : "Подробнее"}
            </div>
        </li>
    )
}

export default Block1Card