import { useHistory } from 'react-router-dom'

export function PayForm({ price }) {
    const history = useHistory()

    const pay = (e) => {
        e.preventDefault()
        history.push(`/check?price=${price}`)
    }

    return (
        <form onSubmit={pay}>
            <label htmlFor="price">Итого к оплате: {price} руб</label>
            <br />
            <br />
            <button type="submit">Оплатить</button>
        </form>
    )
}
