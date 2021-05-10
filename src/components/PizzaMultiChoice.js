import { actionSetUnsaved, useSelector } from '../state'
import { useDispatch } from '../PizzaProvider'
import { LabeledPiece } from './LabeledPiece'
import { LABELS } from '../values'

export function PizzaMultiChoice({ name, variants, selector, actions: [add, remove] }) {
    const pizzaPropValue = useSelector(selector)
    const dispatch = useDispatch()

    const dispatchChange = (e) => {
        const payload = variants[e.target.value]
        const action = (e.target.checked ? add : remove)(payload)
        dispatch(action)
    }

    return (
        <LabeledPiece label={LABELS[name]}>
            {Object.entries(variants).map(([key, value]) => (
                <div key={key}>
                    <input
                        type="checkbox"
                        id={key}
                        name={name}
                        value={key}
                        onChange={dispatchChange}
                        checked={pizzaPropValue.includes(value)}
                    />
                    <label htmlFor={key}>{value}</label>
                </div>
            ))}
        </LabeledPiece>
    )
}
