import photo1 from '../../../../Assets/Images/SeasonContent/photo1.jpg';
import photo2 from '../../../../Assets/Images/SeasonContent/photo2.jpg';
import photo3 from '../../../../Assets/Images/SeasonContent/photo3.jpg';
import photo4 from '../../../../Assets/Images/SeasonContent/photo4.jpg';
import './SeasonContent.scss';
const SeasonContent = ({ data }) => {
    const seasonContent = [
        {
            photo: photo1,
            title: ['Женщины', 'Мужчины']
        },
        {
            photo: photo2,
            title: ['Девочки & Малышки Девочки', 'Мальчики & Малыши Мальчики']
        },
        {
            photo: photo3,
            title: ['Женщины', 'Мужчины']
        },
        {
            photo: photo4,
            title: ['Дети', 'Малыши']
        },
        {
            photo: photo1,
            title: ['Женщины', 'Мужчины']
        },
        {
            photo: photo2,
            title: ['Девочки & Малышки Девочки', 'Мальчики & Малыши Мальчики']
        },
    ]
    return (
        <div className="season__group">
            <div className="season__content">
                {data?.map((src, idx) => (
                    <img
                        key={idx}
                        className={`season__content-image season__content-image${idx + 1}`}
                        src={src}
                        alt={`Season ${idx + 1}`}
                    />
                ))}
            </div>
            <div className="season__info">
                {
                    seasonContent?.map((item, index) => (
                        <div className="season__info-group" key={index}>
                            <img
                                className='season__info-image'
                                src={item.photo}
                                alt={`Season ${index + 1}`}
                            />
                            <div className="season__buttons">
                                {
                                    item.title?.map((title, index) => (
                                        <button className="season__button" key={index}>
                                            {title}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SeasonContent