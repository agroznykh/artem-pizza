import { Link } from 'react-router-dom'

export function Login() {
    const logIn = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={logIn}>
            <fieldset>
                <label htmlFor="login">Логин</label>
                <input id="login" type="text" placeholder="укажите логин" />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" placeholder="введите пароль" />
            </fieldset>
            <button type="submit">Авторизоваться</button>
            <br />
            <br />
            Перейти на страницу <Link to="/registration">регистрации</Link>
        </form>
    )
}
