import './css/block1-card.css';

function Block1Card(props) {
    return (
        <li className="block1-card">
            <img className="block1-card__image" src={props.img} alt='card-img' />
            <p className="block1-card__title">{props.title}</p>
            <div className="block1-card__descriptions">
                <p className="block1-card__description">{props.description}</p>
                <p className="block1-card__description">{props.description2}</p>
            </div>
        </li>
    )
}

export default Block1Card