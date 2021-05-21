import { Link } from 'react-router-dom'

export function Registration() {
    const register = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={register}>
            <fieldset>
                <label htmlFor="login">Логин</label>
                <input id="login" type="text" placeholder="укажите логин" />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" placeholder="введите пароль" />
            </fieldset>
            <button type="submit">Зарегистрироваться</button>
            <br />
            <br />
            Перейти на страницу <Link to="/login">авторизации</Link>
        </form>
    )
}
