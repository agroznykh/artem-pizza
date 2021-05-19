import { LABELS } from '../values'
import { LabeledPiece } from './LabeledPiece'

export const CheckboxGroup = ({ pizzaPropValue, dispatchChange, name, variants }) => {
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
