import { calcPizzaPrice } from '../Utils'
import { OrderToppings } from './OrderToppings'

export function Order({ pizza }) {
    if (!pizza) return <h2>Заказ еще не сформирован</h2>

    const { size, dough, sauce } = pizza

    const hasToppings = (pizza) => {
        const { cheeses, vegetables, meats } = pizza

        return !!(cheeses.length || vegetables.length || meats.length)
    }

    return (
        <>
            <h3>Ваш заказ:</h3>
            <div style={{ display: 'flex', flexFlow: 'column' }}>
                <span>Размер - {size}</span>
                <span>Тесто - {dough}</span>
                <span>Соус - {sauce}</span>
            </div>
            {hasToppings(pizza) && <OrderToppings pizza={pizza} />}
            <br />
            Итого: {calcPizzaPrice(pizza)} руб
        </>
    )
}
