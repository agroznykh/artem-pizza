import { LabeledPiece } from './LabeledPiece'
import { LABELS } from '../values'

export const RadioGroup = ({ name, variants, onChange, value }) => {
    return (
        <LabeledPiece label={LABELS[name]}>
            {Object.entries(variants).map(([key, variantValue]) => (
                <div key={key}>
                    <input
                        type="radio"
                        id={key}
                        name={name}
                        value={variantValue}
                        onChange={onChange}
                        checked={value === variantValue}
                    />
                    <label htmlFor={key}>{variantValue}</label>
                </div>
            ))}
        </LabeledPiece>
    )
}
