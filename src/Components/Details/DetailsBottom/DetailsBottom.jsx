import Arrow from '../../../Assets/Svg/Arrow';
import photo2 from '../../../Assets/Images/Details/photo2.png';
import photo3 from '../../../Assets/Images/Details/photo3.png';
import photo4 from '../../../Assets/Images/Details/photo4.png';
import './DetailsBottom.scss';
const DetailsBottom = () => {
    const detailsData = [
        {
            title: 'ОПИСАНИЕ ТОВАРА',
            image: photo2,
        },
        {
            title: 'РЕКОМЕНДАЦИИ ПО УХОДУ',
            image: photo3,
            description: 'Как необходимо стирать Вашу одежду?'
        },
        {
            title: 'ДОСТАВКА И ВОЗВРАТ',
            image: photo4,
            description: 'Нажмите для просмотра'
        }
    ]
    const detailsInfo = [
        { title: 'Состав и характеристики товара' },
        { title: 'Состав изделия:', subtitle: '%7 ВИСКОЗА %93 ХЛОПОК' },
        { title: 'Основная Ткань:', subtitle: 'Свободная посадка' },
        { title: 'Бренд:', subtitle: 'LCW Jeans' },
        { title: 'Состав и характеристики товара' },
        { title: 'Состав изделия:', subtitle: '%7 ВИСКОЗА %93 ХЛОПОК' },
        { title: 'Основная Ткань:', subtitle: 'Свободная посадка' },
        { title: 'Бренд:', subtitle: 'LCW Jeans' },
    ]
    return (
        <div className="details__bottom">
            {
                detailsData?.map((item, index) => (
                    <details className='details__details' key={index}>
                        <summary className='details__summary'>
                            <div className="details__summary-left">
                                <img src={item.image} alt="" />
                                <p className="details__details-title">{item.title}</p>
                            </div>
                            <Arrow />
                        </summary>
                        {
                            index === 0 ?
                                <div className="details__details-group">
                                    {detailsInfo?.map((text, textIndex) => (
                                        <div className='details__details-content' key={textIndex}>
                                            <p className="details__details-text">{text.title}</p>
                                            {text?.subtitle && <span className='details__details-subtext'>{text?.subtitle}</span>}
                                        </div>
                                    ))}
                                </div>
                                :
                                <button className='details__details-button'>{item.description}</button>
                        }
                    </details>
                ))
            }
        </div>
    )
}

export default DetailsBottom;