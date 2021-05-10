import {createContext, useContext, useReducer} from 'react'
import { DOUGHS, SAUCES, SIZES } from './values'
import { reducer } from './reducer'

const initialState = {
    saved: false,
    size: SIZES.MEDIUM,
    dough: DOUGHS.THIN,
    sauce: SAUCES.TOMATO,
    cheeses: [],
    vegetables: [],
    meats: [],
}

const PizzaContext = createContext({ pizza: initialState })

export const PizzaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <PizzaContext.Provider value={{state, dispatch}}>{children}</PizzaContext.Provider>
}

export const useDispatch = () => useContext(PizzaContext).dispatch
export const usePizzaState = () => useContext(PizzaContext).state
