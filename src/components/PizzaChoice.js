import { actionSetUnsaved, useSelector } from '../reducer'
import { useDispatch } from '../PizzaProvider'
import { LABELS } from '../values'
import { LabeledPiece } from './LabeledPiece'

export function PizzaChoice({ name, variants, selector, action }) {
    const pizzaPropValue = useSelector(selector)
    const dispatch = useDispatch()

    const dispatchChange = (e) => {
        dispatch(action(variants[e.target.value]))
    }

    return (
        <LabeledPiece label={LABELS[name]}>
            {Object.entries(variants).map(([key, value]) => (
                <div key={key}>
                    <input
                        type="radio"
                        id={key}
                        name={name}
                        value={key}
                        onChange={dispatchChange}
                        checked={pizzaPropValue === value}
                    />
                    <label htmlFor={key}>{value}</label>
                </div>
            ))}
        </LabeledPiece>
    )
}
