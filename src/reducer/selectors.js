import { usePizzaState } from '../PizzaProvider'

export const useSelector = (selector) => {
    const state = usePizzaState()
    return selector(state)
}

export const selectorSaved = (state) => state.saved
export const selectorSize = (state) => state.size
export const selectorDough = (state) => state.dough
export const selectorSauce = (state) => state.sauce
export const selectorVegetables = (state) => state.vegetables
export const selectorCheeses = (state) => state.cheeses
export const selectorMeats = (state) => state.meats
