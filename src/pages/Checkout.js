import { useLocation } from 'react-router-dom'
import { MainPageLink } from '../components/MainPageLink'

export function Checkout() {
    const location = useLocation()
    const price = new URLSearchParams(location.search).get('price')

    return (
        <>
            <h2>Чек на сумму - {price || 0}</h2>
            <MainPageLink />
        </>
    )
}
