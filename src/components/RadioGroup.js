import { LabeledPiece } from './LabeledPiece'
import { LABELS } from '../values'

export const RadioGroup = ({ pizzaPropValue, dispatchChange, name, variants }) => {
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
