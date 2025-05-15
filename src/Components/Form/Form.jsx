import { Link } from 'react-router-dom';
import RefreshIcon from '../../Assets/Svg/Form/RefreshIcon';
import photo1 from '../../Assets/Images/Form/photo1.png';
import './Form.scss';
import { Fragment } from 'react';
const Form = ({ data, status }) => {
    return (
        <section className="form">
            <div className="form__wrapper">
                <div className="form__inner">
                    <form className="form__content">
                        <h1 className="form__content-title">{data.title}</h1>
                        {
                            data.input?.map((item, index) => (
                                <div className="form__box" key={index} tabIndex={index}>
                                    <input className='form__box-input' type={item.type} placeholder={item.description} style={{ width: '100%' }} />
                                    <div className="form__box-image">
                                        {item.photo}
                                    </div>
                                </div>
                            ))
                        }
                        <div className="form__checkbox" style={!data.status ? { flexDirection: 'column' } : {}}>
                            {
                                data.checkbox?.map((item, index) => (
                                    <div className="form__group" key={index}>
                                        <input type="checkbox" />
                                        <p className="form__group-title">{item.info}</p>
                                    </div>
                                ))
                            }
                            {data.status && <p className="form__checkbox-title">Я забыл мой пароль</p>}
                        </div>
                        {
                            status &&
                            <div className="form__text">
                                <div className="form__text-box">
                                    <img src={photo1} alt="" />
                                    <button className='form__text-button'>
                                        <RefreshIcon />
                                    </button>
                                </div>
                                <textarea className='form__textarea'></textarea>
                            </div>
                        }
                        <Link className="form__button" to={data.to}>{data.link || 'Войти'}</Link>
                    </form>
                    <div className="form__bottom" style={data.status ? { flexDirection: 'column' } : { flexDirection: ' row' }}>
                        {
                            data.status ?
                                <Fragment>
                                    <p className="form__title">Ещё не зарегистрировались?</p>
                                    <Link className="form__bottom-title" to={'/register'}>Регистрация</Link>
                                </Fragment>
                                :
                                <Fragment>
                                    <p className="form__title">Уже зарегистрированы?</p>
                                    <Link className="form__bottom-title" to={'/login'}> Войти</Link>
                                </Fragment>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;