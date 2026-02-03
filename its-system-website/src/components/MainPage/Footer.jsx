import './css/footer.css';
import YandexMap from './YandexMap';

function Footer() {
    return (
        <div className='footer'>
            <div className="uk-container block-condition__container">
                <h1 className="block-title">Как нас найти</h1>
                <div className="footer-box">
                    <div className="footer__logo hb__first-column">
                        <div className="hb__logo">
                          <img src="./src/assets/logo/its-system.png" alt="test-logo" />
                        </div>
                        <p className="hb__slogan">
                            Ремонт, заправка и обслуживание оргтехники
                        </p>
                    </div>
                    <div className="footer-info">
                        <div className="footer__phone-number foot-margin">
                            <p>+х (ххх) ххх-хх-хх</p>
                            <p>+х (ххх) ххх-хх-хх</p>
                        </div>
                        <p className='footer-adress foot-margin'>
                            Казахстан, город Астана, район Байконыр, улица Ахмета Жубанова, дом 4
                            </p>
                        <a className='footer-link foot-margin' href="#">Наша почта</a>
                        <div className="header-contacts foot-contacts foot-margin">
                            <img src="./src/assets/contacts/telegram.svg" alt="svg" />
                            <img src="./src/assets/contacts/whatsapp.svg" alt="svg" />
                            <img src="./src/assets/contacts/phone.svg" alt="svg" />
                        </div>
                    </div>
                </div>
                <YandexMap />
            </div>
        </div>
    );
}

export default Footer;