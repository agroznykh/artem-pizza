import { Link } from 'react-router-dom'

export function MainPage() {
    return (
        <>
            <h2>Вы на главной странице</h2>
            <Link to="/configurator">Сделать заказ</Link>
        </>
    )
}
