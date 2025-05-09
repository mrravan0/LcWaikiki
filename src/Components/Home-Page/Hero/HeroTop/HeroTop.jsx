import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import photo7 from '../../../../Assets/Images/Hero/photo7.jpg';
import photo8 from '../../../../Assets/Images/Hero/photo8.jpg';
import 'swiper/css';
import 'swiper/css/bundle';
import './HeroTop.scss';
const HeroTop = ({ data }) => {
    return (
        <div className="hero__top">
            <div className="hero__left">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active"
                    }}
                autoplay={{ delay: 5000 }}
                >
                    {
                        data?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="hero__swiper">
                                    <img className='hero__left-image' src={item.photo} alt="" />
                                    <div className="hero__group">
                                        {
                                            item.description?.map((item, index) => (
                                                <button className='hero__button' key={index}>{item}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="hero__right">
                <img className='hero__right-image' src={photo7} alt="" />
                <img className='hero__right-image' src={photo8} alt="" />
            </div>
        </div>
    )
}

export default HeroTop;