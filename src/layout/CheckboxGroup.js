import { FixedWidthBlock } from './FixedWidthBlock'

export const CheckboxGroup = ({ name, variants, onChange, value }) => {
    const _onChange = (e) => onChange(e.target.value, e.target.checked)

    return (
        <FixedWidthBlock>
            <legend>{name}</legend>
            {Object.entries(variants).map(([key, variantValue]) => (
                <fieldset key={key}>
                    <input
                        type="checkbox"
                        id={key}
                        name={name}
                        value={variantValue}
                        onChange={_onChange}
                        checked={value.includes(variantValue)}
                    />
                    <label htmlFor={key}>{variantValue}</label>
                </fieldset>
            ))}
        </FixedWidthBlock>
    )
}
