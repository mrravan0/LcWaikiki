import Form from "../../Components/Form/Form";
import SendIcon from "../../Assets/Svg/Form/SendIcon";
import PasswordIcon from "../../Assets/Svg/Form/PasswordIcon";
import './OrderPage.scss';
const OrderPage = () => {
    const orderLoginData = {
        title: 'ВХОД ДЛЯ ЗАРЕГИСТРИРОВАННЫХ ПОЛЬЗОВАТЕЛЕЙ ',
        input: [
            { description: 'Ваш адрес электронной почты', type: 'text', photo: <SendIcon /> },
            { description: 'Ваш адрес электронной почты', type: 'text', photo: <PasswordIcon /> }
        ],
        checkbox: [{ info: 'Запомнить меня' }],
        to: '/login',
        status: true
    }
    const orderRegisterData = {
        title: 'ЗАКАЗ БЕЗ РЕГИСТРАЦИИ',
        input: [
            { description: 'Ваш адрес электронной почты', type: 'email', photo: <SendIcon /> },
        ],
        checkbox: [
            { info: 'Я хочу получать новости и  уведомления об акциях по электронной почте.' },
            {
                info:
                    'Настоящим я подтверждаю, что прочитал(а), понимаю и принимаю Политику защиты и обработки персональных данных ООО «Тема Ритейл Ру» и согласен(а) со всеми их положениями без каких-либо исключений. '
            }
        ],
        link: 'Продолжить без регистрации',
        to: '/bag',
        status: false
    }
    return (
        <section className="order">
            <div className="order__inner container">
                <div className="order__wrapper">
                    <Form data={orderLoginData} />
                    <Form data={orderRegisterData} />
                </div>
            </div>
        </section>
    )
}

export default OrderPage;