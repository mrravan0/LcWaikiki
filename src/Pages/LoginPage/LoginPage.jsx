import Form from "../../Components/Form/Form";
import SendIcon from '../../Assets/Svg/Form/SendIcon';
import PasswordIcon from "../../Assets/Svg/Form/PasswordIcon";
const LoginPage = () => {
    const formData = {
        title: 'ВХОД ДЛЯ ЗАРЕГИСТРИРОВАННЫХ ПОЛЬЗОВАТЕЛЕЙ ',
        input: [
            { description: 'Ваш адрес электронной почты', photo: <SendIcon />, type: 'text' },
            { description: 'Ваш пароль', photo: <PasswordIcon />, type: 'password' }
        ],
        checkbox: [{ info: 'Запомнить меня' }],
        to: '/login',
        status: true
    }
    return <Form data={formData} />
}

export default LoginPage;