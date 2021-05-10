import { usePizzaState } from '../PizzaProvider'
import {
    selectorCheeses,
    selectorDough,
    selectorMeats,
    selectorSauce,
    selectorSaved,
    selectorSize,
    selectorVegetables,
} from '../reducer'
import {CostSpan} from "./CostSpan";

export function PizzaResult() {
    const state = usePizzaState()

    const saved = selectorSaved(state)

    if (!saved) return null

    const size = selectorSize(state)
    const dough = selectorDough(state)
    const sauce = selectorSauce(state)
    const cheeses = selectorCheeses(state)
    const vegetables = selectorVegetables(state)
    const meats = selectorMeats(state)

    return (
        <>
            <h3>Ваша пицца:</h3>

            <div style={{ display: 'flex', flexFlow: 'column' }}>
                <span>Размер - {size}</span>
                <span>Тесто - {dough}</span>
                <span>Соус - {sauce}</span>
            </div>

            {!!(cheeses.length || vegetables.length || meats.length) && (
                <div style={{ display: 'flex', flexFlow: 'column' }}>
                    <span style={{fontStyle: 'italic', margin: '10px 0'}}>Добавки:</span>
                    {!!cheeses.length && <span>Сыры - {cheeses.join(', ')}</span>}
                    {!!vegetables.length && <span>Овощи - {vegetables.join(', ')}</span>}
                    {!!meats.length && <span>Мясо - {meats.join(', ')}</span>}
                </div>
            )}

            <br/>
            Итого: <CostSpan /> руб
        </>
    )
}
