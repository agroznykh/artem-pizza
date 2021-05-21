import { Order } from './Order'
import { PayForm } from './PayForm'

export function OrderPay({ order }) {
    return (
        <>
            <Order pizza={order.pizza} />
            <br />
            <br />
            <PayForm price={order.price} />
        </>
    )
}
