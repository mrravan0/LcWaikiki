import { memo } from 'react';
import photo1 from '../../../Assets/Images/Filter/photo1.png';
import ArrowIcon from '../../../Assets/Svg/Arrow';
import './Filter.scss';
const Filter = memo(({ onToggle, status }) => {
    const filterData = [
        'Размер', 'Тип товара', 'Цвет',
        'Цена', 'Бренд', 'Лицензия',
        'Узор', 'Ткань', 'Лицензия',
        'Размер', 'Тип товара', 'Цвет',
        'Цена', 'Бренд', 'Лицензия',
        'Узор', 'Ткань', 'Лицензия',
        'Бренд', 'Лицензия',
    ]
    return (
        <details className='filter' onToggle={(e) => onToggle(e.currentTarget.open)} style={status ? { position: 'sticky' } : {}}>
            <summary className='filter__summary'>
                <div className="filter__summary-content">
                    <img src={photo1} alt="" />
                    <p className="filter__summary-title">Фильтры</p>
                </div>
                <ArrowIcon color={'#1f49b6'} />
            </summary>
            <div className="filter__content">
                <div className="filter__info">
                    <p className="filter__info-title"> Выбранные фильтры(0)</p>
                </div>
                {
                    filterData?.map((item, index) => (
                        <details className='filter__info' key={index}>
                            <summary className='filter__summary'>
                                <p className="filter__info-title">{item}</p>
                                <ArrowIcon color={'#1f49b6'} />
                            </summary>
                            <p>Salam Men acildim</p>
                        </details>
                    ))
                }
            </div>
        </details>
    )
})
export default Filter;