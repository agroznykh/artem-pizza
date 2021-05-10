import { ACTION_NAMES } from './actions'

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTION_NAMES.SET_SAVED:
            return { ...state, saved: true }

        case ACTION_NAMES.CHANGE_SIZE:
            return { ...state, size: payload, saved: false }

        case ACTION_NAMES.CHANGE_DOUGH:
            return { ...state, dough: payload, saved: false }

        case ACTION_NAMES.CHANGE_SAUCE:
            return { ...state, sauce: payload, saved: false }

        case ACTION_NAMES.ADD_CHEESE:
            const cheeses = [...state.cheeses]
            !cheeses.includes(payload) && cheeses.push(payload)
            return { ...state, cheeses, saved: false }

        case ACTION_NAMES.REMOVE_CHEESE:
            return { ...state, cheeses: state.cheeses.filter((cheese) => cheese !== payload), saved: false }

        case ACTION_NAMES.ADD_VEGETABLE:
            const vegetables = [...state.vegetables]
            !vegetables.includes(payload) && vegetables.push(payload)
            return { ...state, vegetables, saved: false }

        case ACTION_NAMES.REMOVE_VEGETABLE:
            return { ...state, vegetables: state.vegetables.filter((vegetable) => vegetable !== payload), saved: false }

        case ACTION_NAMES.ADD_MEAT:
            const meats = [...state.meats]
            !meats.includes(payload) && meats.push(payload)
            return { ...state, meats, saved: false }

        case ACTION_NAMES.REMOVE_MEAT:
            return { ...state, meats: state.meats.filter((meat) => meat !== payload), saved: false }

        default:
            return state
    }
}
