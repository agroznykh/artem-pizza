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
import {LABELS} from "../values";

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
            <h3>{LABELS.yourPizza}:</h3>
            <div style={{ display: 'flex', flexFlow: 'column' }}>
                <span>
                    {LABELS.size} - {size}
                </span>
                <span>
                    {LABELS.dough} - {dough}
                </span>
                <span>
                    {LABELS.sauce} - {sauce}
                </span>
            </div>
            {!!(cheeses.length || vegetables.length || meats.length) && (
                <div style={{ display: 'flex', flexFlow: 'column' }}>
                    <span style={{ fontStyle: 'italic', margin: '10px 0' }}>{LABELS.addons}:</span>
                    {!!cheeses.length && (
                        <span>
                            {LABELS.cheeses} - {cheeses.join(', ')}
                        </span>
                    )}
                    {!!vegetables.length && (
                        <span>
                            {LABELS.vegetables} - {vegetables.join(', ')}
                        </span>
                    )}
                    {!!meats.length && (
                        <span>
                            {LABELS.meats} - {meats.join(', ')}
                        </span>
                    )}
                </div>
            )}
            <br />
            {LABELS.total}: <CostSpan /> {LABELS.currency}
        </>
    )
}
