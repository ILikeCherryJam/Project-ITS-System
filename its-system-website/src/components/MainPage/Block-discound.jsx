import './css/block-discount.css';

function BlockDiscount() {
    return (
        <div className="uk-container block1-container">
            <h1 className='block-title block-title__discount'>Хотите сократить расходы на печать?</h1>
            <h1 className="block-title__colored">Платите <span>только</span> за напечатанные страницы!</h1>
            <div className="discount-content">
                <img src="./src/assets/pictures/discount_image.jpg" alt="" />
                <div className="discount-slogan">
                    Аутсорсинг печати — хочешь узнать больше?
                    <span>Жми!</span>
                </div>
            </div>
        </div>
    );
}

export default BlockDiscount;