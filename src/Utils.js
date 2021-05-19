import { COSTS, SIZES } from './Values'

export const calcPizzaPrice = (pizza) => {
    const { size, cheeses, vegetables, meats } = pizza

    const sizeIncrease = size === SIZES.BIG ? 1 : 0
    const addonsAmount = cheeses.length + vegetables.length + meats.length

    return COSTS.BASE + COSTS.SIZE_INCREASE * sizeIncrease + COSTS.ADDON_INCREASE * addonsAmount
}
