import { Order } from '../../components/Order'
import { PayForm } from '../../components/PayForm'

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
