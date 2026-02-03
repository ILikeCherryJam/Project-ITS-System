import './css/block-condition.css';

function BlockCondition() {
    return (
        <div className="uk-container block-condition__container">
            <h1 className="block-title">Выгодные условия для компаний и офисов</h1>
            <div className="block-condition">
                <div className="condition-description">
                    <ul className='condition-list'>
                        <li className='condition-item'>
                            Прозрачные условия - договор, полный комплект документов.
                            </li>
                        <li className='condition-item'>
                            При заключении договора доставка картриджей бесплатно
                            </li>
                        <li className='condition-item'>
                            Поможем Вам с анализом рынка и предоставим для сравнения коммерческие предложения от конкурентов.
                            </li>
                        <li className='condition-item'>
                            Персональный подход.
                            </li>
                        <li className='condition-item'>
                            За каждым корпоративным клиентом закрепляется личный менеджер, который отследит самые выгодные цены и будет контролировать качество услуг.
                            </li>
                        <li className='condition-item'>
                            Бесплатно проанализируем печатный парк и дадим рекомендации.
                            </li>
                    </ul>
                </div>
                <div className="condition-column">
                    <div className="condition-image">
                        <div className="offer-button condition-button"></div>
                    </div>
                    <div className="condition-slogan"></div>
                </div>
            </div>
        </div>
    );
}

export default BlockCondition;

