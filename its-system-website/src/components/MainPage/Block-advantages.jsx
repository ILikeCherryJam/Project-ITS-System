import './css/block-advantages.css';
import Block1Card from './cards/Block1-card.jsx';

function BlockAdvantages() {
    return (
        <div className="uk-container block1-container">
            <h1 className='block1-title'>Почему выбирают нас?</h1>
            <div className="block1">
                <div className="block1-content">
                    <Block1Card 
                        img="./src/assets/pictures/quality.svg" 
                        title="ЖЕСТКАЯ ПОЗИЦИЯ ПО КАЧЕСТВУ" 
                        description=""
                        description2=""
                    />
                    <Block1Card 
                        img="./src/assets/pictures/transparency.svg" 
                        title="100 ЧЕСТНОСТИ И ПРОЗРАЧНОСТИ" 
                        description=""
                        description2=""
                    />
                    <Block1Card 
                        img="./src/assets/pictures/guarantee.svg" 
                        title="ГАРАНТИЯ" 
                        description=""
                        description2=""
                    />
                    <Block1Card 
                        img="./src/assets/pictures/equipment.svg" 
                        title="СПЕЦИАЛИЗИРОВАННОЕ ОБОРУДОВАНИЕ" 
                        description=""
                        description2=""
                    />
                    <Block1Card 
                        img="./src/assets/pictures/check.svg" 
                        title="ПРОВЕРЯЕМ КАЖДЫЙ КАРТРИДЖ" 
                        description=""
                        description2=""
                    />
                    <Block1Card 
                        img="./src/assets/pictures/employers.svg" 
                        title="СИЛЬНЫЙ ШТАТ СОТРУДНИКОВ" 
                        description=""
                        description2=""
                    />
                </div>
            </div>
        </div>
    )
}

export default BlockAdvantages