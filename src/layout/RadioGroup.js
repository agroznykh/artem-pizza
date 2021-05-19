import { FixedWidthBlock } from './FixedWidthBlock'

export const RadioGroup = ({ name, variants, onChange, value }) => {
    return (
        <FixedWidthBlock>
            <legend>{name}</legend>
            {Object.entries(variants).map(([key, variantValue]) => (
                <fieldset key={key}>
                    <input
                        type="radio"
                        id={key}
                        name={name}
                        value={variantValue}
                        onChange={onChange}
                        checked={value === variantValue}
                    />
                    <label htmlFor={key}>{variantValue}</label>
                </fieldset>
            ))}
        </FixedWidthBlock>
    )
}
