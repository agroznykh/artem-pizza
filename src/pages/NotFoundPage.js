import { Link } from 'react-router-dom'

export function NotFoundPage() {
    return (
        <>
            <h2>404 Page Not Found</h2>
            Вернуться на <Link to="/">главную страницу</Link>
        </>
    )
}
