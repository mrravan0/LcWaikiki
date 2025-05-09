import photo1 from '../../../Assets/Images/Hero/photo1.jpg';
import photo2 from '../../../Assets/Images/Hero/photo2.jpg';
import photo3 from '../../../Assets/Images/Hero/photo3.jpg';
import photo4 from '../../../Assets/Images/Hero/photo4.jpg';
import photo5 from '../../../Assets/Images/Hero/photo5.jpg';
import photo6 from '../../../Assets/Images/Hero/photo6.jpg';
import photo9 from '../../../Assets/Images/Hero/photo9.jpg';
import photo10 from '../../../Assets/Images/Hero/photo10.jpg';
import photo11 from '../../../Assets/Images/Hero/photo11.jpg';
import './Hero.scss';
import HeroTop from './HeroTop/HeroTop';
const Hero = () => {
    const heroData = [
        {
            photo: photo1,
            description: ['Смотреть Сейчас']
        },
        {
            photo: photo2,
            description: ['Кухня', 'Гостиная', 'Ванная', 'Спальня']
        },
        {
            photo: photo3,
            description: ['Женщины', 'Мужчины']
        },
        {
            photo: photo4
        },
        {
            photo: photo5
        },
        {
            photo: photo6,
            description: ['Женщины', 'Дети & Малыши']
        }
    ]
    const heroInfo = [
        {
            photo: photo9,
            title: 'НОВЫЕ ПОСТУПЛЕНИЯ'
        },
        {
            photo: photo10,
            title: 'ФУТБОЛКИ'
        },
        {
            photo: photo11,
            title: 'ДЕНИМ'
        },
        {
            photo: photo9,
            title: 'НОВЫЕ ПОСТУПЛЕНИЯ'
        },
        {
            photo: photo10,
            title: 'ФУТБОЛКИ'
        },
        {
            photo: photo11,
            title: 'ДЕНИМ'
        },
        {
            photo: photo9,
            title: 'НОВЫЕ ПОСТУПЛЕНИЯ'
        },
        {
            photo: photo10,
            title: 'ФУТБОЛКИ'
        },
        {
            photo: photo11,
            title: 'ДЕНИМ'
        }
    ];
    return (
        <section className='hero'>
            <div className="hero__inner">
                <div className="hero__wrapper">
                    <HeroTop data={heroData} />
                    <div className="hero__bottom">
                        {
                            heroInfo?.map((item, index) => (
                                <div className="hero__content" key={index}>
                                    <img className='hero__content-image' src={item.photo} alt="" />
                                    <p className='hero__content-title'>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;