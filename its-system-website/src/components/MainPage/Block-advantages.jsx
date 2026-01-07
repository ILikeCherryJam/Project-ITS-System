import './css/block-advantages.css';
import Block1Card from './cards/Block1-card.jsx';

function BlockAdvantages() {
    return (
        <div className="uk-container block1-container">
            <h1 className='block-title'>Почему выбирают нас?</h1>
            <div className="block1">
                <div className="block1-content">
                    <Block1Card 
                        img="./src/assets/pictures/quality.svg" 
                        title="ЖЕСТКАЯ ПОЗИЦИЯ ПО КАЧЕСТВУ" 
                        description="Комплектующих и качеству печати — мы не экономим на комплектующих и тонере, выбираем самые качественные продукты."
                        description2="Предлагаем лучший результат за оптимальную цену."
                    />
                    <Block1Card 
                        img="./src/assets/pictures/transparency.svg" 
                        title="100 ЧЕСТНОСТИ И ПРОЗРАЧНОСТИ" 
                        description="У нас не бывает — «недосыпали тонер»."
                        description2="Наоборот — мы заполним больше, если это предусматривает модель вашего картриджа."
                    />
                    <Block1Card 
                        img="./src/assets/pictures/guarantee.svg" 
                        title="ГАРАНТИЯ" 
                        description="На все виды работ."
                        description2="Возникли проблемы после заправки или ремонта? Повторный вызов за наш счет!"
                    />
                    <Block1Card 
                        img="./src/assets/pictures/equipment.svg" 
                        title="СПЕЦИАЛИЗИРОВАННОЕ ОБОРУДОВАНИЕ" 
                        description="Необходимое для качественной заправки и восстановления картриджей."
                    />
                    <Block1Card 
                        img="./src/assets/pictures/check.svg" 
                        title="ПРОВЕРЯЕМ КАЖДЫЙ КАРТРИДЖ" 
                        description="На своих принтерах, каждым заправленным картриджем печатаем тестовую страницу."
                        description2="Это позволяет сократить частоту брака до минимума."
                    />
                    <Block1Card 
                        img="./src/assets/pictures/employers.svg" 
                        title="СИЛЬНЫЙ ШТАТ СОТРУДНИКОВ" 
                        description="Обученных заправщиков и сертифицированных инженеров со стажем от 5 до 15 лет, которые гарантирую качество."
                    />
                </div>
            </div>
        </div>
    )
}

export default BlockAdvantages