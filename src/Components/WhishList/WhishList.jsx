import Card from '../Layout/Card/Card';
import photo1 from '../../Assets/Images/Details/photo1.png';
import './WhishList.scss';
const WhishList = ({ data }) => {
    return (
        <section className="whishList">
            <div className="whishList__wrapper">
                <div className="whishList__content">
                    <h1 className="whishList__left-title">Мой Список желаний</h1>
                    <div className="whishList__right-box">
                        <img src={photo1} alt="" />
                        <p>Поделись моим любимым списком</p>
                    </div>
                </div>
                <div className="whishList__content">
                    <div className="whishList__left-content">
                        <p className="whishList__left-subtitle">{data.length} товар</p>
                        <button className='whishList__left-box'>Выбрать несколько</button>
                        <button className='whishList__left-box'>Выбрать все</button>
                    </div>
                    <div class="product__box">
                        <div class="product__box-content">
                            <div class="product__box-item" style={{ backgroundColor: 'rgb(224, 224, 224)' }}></div>
                            <div class="product__box-item" style={{ backgroundColor: 'rgb(224, 224, 224)' }}></div>
                            <div class="product__box-item" style={{ backgroundColor: 'rgb(224, 224, 224)' }}></div>
                        </div>
                        <div class="product__box-content">
                            <div class="product__box-item" style={{ backgroundColor: 'rgb(85, 85, 85)' }}></div>
                            <div class="product__box-item" style={{ backgroundColor: 'rgb(85, 85, 85)' }}></div>
                            <div class="product__box-item" style={{ backgroundColor: 'rgb(85, 85, 85)' }}></div>
                            <div class="product__box-item" style={{ backgroundColor: 'rgb(85, 85, 85)' }}></div>
                        </div>
                    </div>
                </div>
                <div className="whishList__bottom">
                    {
                        data?.map((item, index) => (
                            <Card data={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhishList;