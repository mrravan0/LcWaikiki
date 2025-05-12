import Form from "../../Components/Form/Form"
import UserIcon from '../../Assets/Svg/Form/UserIcon';
import SendIcon from "../../Assets/Svg/Form/SendIcon";
import PasswordIcon from "../../Assets/Svg/Form/PasswordIcon";
const RegisterPage = () => {
    const registerData = {
        title: 'РЕГИСТРАЦИЯ',
        input: [
            { description: 'Имя Фамилия', photo: <UserIcon />, type: 'text' },
            { description: 'Ваш адрес электронной почты', photo: <SendIcon />, type: 'text' },
            { description: 'Ваш пароль', photo: <PasswordIcon />, type: 'password' },
            { description: 'Ваш пароль', photo: <PasswordIcon />, type: 'password' }
        ],
        checkbox: [
            { info: 'Я хочу получать новости и  уведомления об акциях по электронной почте.' },
            { info: 'Настоящим я подтверждаю, что прочитал(а), понимаю и принимаю Политику защиты и обработки персональных данных ООО «Тема Ритейл Ру» и согласен(а) со всеми их положениями без каких-либо исключений.' }
        ],
        status: false
    }
    return <Form data={registerData} />
}

export default RegisterPage;