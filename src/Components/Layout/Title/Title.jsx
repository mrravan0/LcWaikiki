import HomeIcon from '../../../Assets/Svg/HomeIcon';
import './Title.scss';
const Title = ({ info }) => {
    return (
        <div className="title">
            <div className="title__inner">
                <p className="title__description" style={{ color: '#555' }}>Назад</p>
                <div className="title__content">
                    <HomeIcon />
                    <p className="title__description" style={{ color: '#555' }}>Домашняя страница</p>
                </div>
                <p className="title__main">{info}</p>
            </div>
        </div>
    )
}

export default Title;