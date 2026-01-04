import './css/offer.css';


function Offer() {


    return (
        <div className="offer">
            <div className="uk-container">
                <div className="offer-content">
                    <p className='offer-slogan'>Сохраним Ваши деньги, время и нервы</p>
                    <div className='offer-description'>
                        <p className='offer-desc__item'><span>
                            ЗАПРАВКА</span>КАРТРИДЖЕЙ</p>
                        <p className='offer-desc__item'><span>
                            РЕМОНТ</span>ПРИНТЕРОВ</p>
                        <p className='offer-desc__item'><span>
                            АУТСОРСИНГ</span>ПЕЧАТИ</p>
                    </div>
                    <div className='offer-expirience'>
                        <div className="offer-exp__text">
                            <p>3 года на рынке</p>
                            <p>Любим своё дело</p>
                            <p>Делаем как для себя</p>
                        </div>
                        <span>!</span>
                    </div>
                    <div className='offer-button'></div>
                </div>
            </div>
        </div>
    );
}

export default Offer;