import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav>
            <p>
                <Link to="/login">Логин</Link>
            </p>
            <p>
                <Link to="/configurator">Конфигуратор пиццы</Link>
            </p>
            <p>
                <Link to="/archive">Архив заказов</Link>
            </p>
        </nav>
    )
}
