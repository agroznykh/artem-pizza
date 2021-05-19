import { useDispatch, usePizzaState } from '../PizzaProvider'
import { actionSetSaved, selectorCheeses, selectorMeats, selectorSize, selectorVegetables } from '../state'
import { COSTS, LABELS, SIZES } from '../values'

export function PizzaSubmit() {
    const dispatch = useDispatch()

    const state = usePizzaState()

    const sizeIncrease = selectorSize(state) === SIZES.BIG ? 1 : 0
    const addonsAmount = selectorCheeses(state).length + selectorVegetables(state).length + selectorMeats(state).length

    const cost = COSTS.BASE + COSTS.SIZE_INCREASE * sizeIncrease + COSTS.ADDON_INCREASE * addonsAmount

    const buttonClicked = () => {
        dispatch(actionSetSaved())
    }

    return (
        <button onClick={buttonClicked}>
            {LABELS.makeOrder} - {cost} {LABELS.currency}.
        </button>
    )
}
