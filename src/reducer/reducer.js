import { ACTION_NAMES } from './actions'

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTION_NAMES.SET_SAVED:
            return { ...state, saved: true }

        case ACTION_NAMES.SET_UNSAVED:
            return { ...state, saved: false }

        case ACTION_NAMES.CHANGE_SIZE:
            return { ...state, size: payload }

        case ACTION_NAMES.CHANGE_DOUGH:
            return { ...state, dough: payload }

        case ACTION_NAMES.CHANGE_SAUCE:
            return { ...state, sauce: payload }

        case ACTION_NAMES.ADD_CHEESE:
            const cheeses = [...state.cheeses]
            !cheeses.includes(payload) && cheeses.push(payload)
            return { ...state, cheeses }

        case ACTION_NAMES.REMOVE_CHEESE:
            return { ...state, cheeses: state.cheeses.filter(cheese => cheese !== payload) }

        case ACTION_NAMES.ADD_VEGETABLE:
            const vegetables = [...state.vegetables]
            !vegetables.includes(payload) && vegetables.push(payload)
            return { ...state, vegetables }

        case ACTION_NAMES.REMOVE_VEGETABLE:
            return { ...state, vegetables: state.vegetables.filter(vegetable => vegetable !== payload) }

        case ACTION_NAMES.ADD_MEAT:
            const meats = [...state.meats]
            !meats.includes(payload) && meats.push(payload)
            return { ...state, meats }

        case ACTION_NAMES.REMOVE_MEAT:
            return { ...state, meats: state.meats.filter(meat => meat !== payload) }

        default:
            return state
    }
}
