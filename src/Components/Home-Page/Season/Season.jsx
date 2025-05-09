import SeasonContent from './SeasonContent/SeasonContent';
import UseMediaQuery from '../../../CustomHooks/UseMediaQuery';
import photo1 from '../../../Assets/Images/Season/photo1.jpg';
import photo2 from '../../../Assets/Images/Season/photo2.jpg';
import photo3 from '../../../Assets/Images/Season/photo3.jpg';
import photo4 from '../../../Assets/Images/Season/photo4.jpg';
import photo5 from '../../../Assets/Images/Season/photo5.jpg';
import photo6 from '../../../Assets/Images/Season/photo6.jpg';
import photo7 from '../../../Assets/Images/Season/photo7.jpg';
import photo8 from '../../../Assets/Images/Season/photo8.jpg';
import photo9 from '../../../Assets/Images/Season/photo9.jpg';
import photo10 from '../../../Assets/Images/Season/photo10.jpg';
import photo11 from '../../../Assets/Images/Season/photo11.jpg';
import './Season.scss';
const Season = () => {
    const isSmallScreen = UseMediaQuery('(max-width: 1000px)');
    const defaultData = [photo2, photo3, photo4, photo5, photo6];
    const smallData = [photo7, photo8, photo9, photo8, photo9];
    const seasonData = isSmallScreen ? smallData : defaultData;
    const mainPhoto = isSmallScreen ? photo11 : photo10;
    return (
        <section className="season">
            <div className="season__inner">
                <div className="season__wrapper">
                    <img className="season__image" src={photo1} alt="Main season" />
                    <div className="container">
                        <SeasonContent data={seasonData} />
                    </div>
                    <img className="season__image" src={mainPhoto} alt="Main season" />
                </div>
            </div>
        </section>
    );
};

export default Season;