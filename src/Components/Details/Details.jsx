import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsTop from './DetailsTop/DetailsTop';
import DetailsBottom from './DetailsBottom/DetailsBottom';
import './Details.scss';
const Details = memo(() => {
    const location = useLocation();
    let { state } = location;
    console.log(state);
    return (
        <section className='details'>
            <div className="details__wrapper">
                <p>Buraya yuxarida ki Component qoyulacaq</p>
                <div className="details__group">
                    <div className="details__left">
                        <img className='details__left-image' src={state.photo} alt="" />
                        <img className='details__left-image' src={state.photo} alt="" />
                        <img className='details__left-image' src={state.photo} alt="" />
                        <img className='details__left-image' src={state.photo} alt="" />
                    </div>
                    <div className="details__right">
                        <DetailsTop data={state} />
                        <div className="details__middle">
                            <p className="details__middle-title">Варианты цветов </p>
                            <div className="details__middle-content">
                                <img className='details__middle-image' src={state.photo} alt="" />
                                <p className="details__middle-subtitle">Индиго</p>
                            </div>
                        </div>
                        <DetailsBottom />
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Details;