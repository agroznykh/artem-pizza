import {selectorCheeses, selectorMeats, selectorSize, selectorVegetables} from "../reducer";
import {COSTS, SIZES} from "../values";
import {usePizzaState} from "../PizzaProvider";

export function CostSpan() {
    const state = usePizzaState()

    const sizeIncrease = selectorSize(state) === SIZES.BIG ? 1 : 0
    const addonsAmount = selectorCheeses(state).length + selectorVegetables(state).length + selectorMeats(state).length

    const cost = COSTS.BASE + COSTS.SIZE_INCREASE * sizeIncrease + COSTS.ADDON_INCREASE * addonsAmount

    return <span>{cost}</span>
}
