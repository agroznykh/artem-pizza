import { Order } from '../components/Order'
import { OrderForm } from '../components/OrderForm'

export function MakeOrder({ order }) {
    return (
        <>
            <Order pizza={order.pizza} />
            <br />
            <br />
            <OrderForm price={order.price} />
        </>
    )
}
