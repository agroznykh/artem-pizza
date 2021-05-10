import { useDispatch } from '../PizzaProvider'
import { actionSetSaved } from '../reducer'
import { CostSpan } from './CostSpan'

export function PizzaSubmit() {
    const dispatch = useDispatch()

    const buttonClicked = () => {
        dispatch(actionSetSaved())
    }

    return (
        <button onClick={buttonClicked}>
            Заказать - <CostSpan /> руб.
        </button>
    )
}
