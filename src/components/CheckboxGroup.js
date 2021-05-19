import { LABELS } from '../values'
import { LabeledPiece } from './LabeledPiece'

export const CheckboxGroup = ({ name, variants, onChange, value }) => {
    const _onChange = (e) => onChange(e.target.value, e.target.checked)

    return (
        <LabeledPiece label={LABELS[name]}>
            {Object.entries(variants).map(([key, variantValue]) => (
                <div key={key}>
                    <input
                        type="checkbox"
                        id={key}
                        name={name}
                        value={variantValue}
                        onChange={_onChange}
                        checked={value.includes(variantValue)}
                    />
                    <label htmlFor={key}>{variantValue}</label>
                </div>
            ))}
        </LabeledPiece>
    )
}
