import { useDispatch } from '../PizzaProvider'
import { actionSetSaved } from '../state'
import { CostSpan } from './CostSpan'
import { LABELS } from '../values'

export function PizzaSubmit() {
    const dispatch = useDispatch()

    const buttonClicked = () => {
        dispatch(actionSetSaved())
    }

    return (
        <button onClick={buttonClicked}>
            {LABELS.makeOrder} - <CostSpan /> {LABELS.currency}.
        </button>
    )
}
