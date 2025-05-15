import Card from '../Layout/Card/Card';
import './CardSlider.scss';
const CardSlider = ({ data , title}) => {
    return (
        <section className='cardSlider'>
            <div className="cardSlider__wrapper">
                <h1 className='cardSlider__title'>{title}</h1>
                <div className="cardSlider__group">
                    {
                        data?.map((item, index) => (
                            <Card data={item} status={false} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default CardSlider;