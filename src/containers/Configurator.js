import { CHEESES, DOUGHS, LABELS, MEATS, SAUCES, SIZES, VEGETABLES } from '../values'
import { useState } from 'react'
import { RadioGroup } from '../components/RadioGroup'
import { CheckboxGroup } from '../components/CheckboxGroup'
import { calcPizzaPrice } from '../Utils'

export const Configurator = ({ saveOrder }) => {
    const [size, setSize] = useState(SIZES.MEDIUM)
    const [dough, setDough] = useState(DOUGHS.THIN)
    const [sauce, setSauce] = useState(SAUCES.TOMATO)
    const [cheeses, setCheeses] = useState([])
    const [vegetables, setVegetables] = useState([])
    const [meats, setMeats] = useState([])

    const pizza = {
        size,
        dough,
        sauce,
        cheeses,
        vegetables,
        meats,
    }

    const onCheckboxGroupChange = (arr, setter, value, presents) => {
        if (presents) {
            if (!arr.includes(value)) {
                setter(arr.concat(value))
            }
        } else {
            setter(arr.filter((elem) => elem !== value))
        }
    }

    const makeOrder = (e) => {
        e.preventDefault()
        saveOrder(pizza)
    }

    const pizzaPrice = calcPizzaPrice(pizza)

    return (
        <form onSubmit={makeOrder}>
            <div style={{ display: 'flex', flexFlow: 'column', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap' }}>
                    <RadioGroup name="size" variants={SIZES} onChange={(e) => setSize(e.target.value)} value={size} />
                    <RadioGroup
                        name="dough"
                        variants={DOUGHS}
                        onChange={(e) => setDough(e.target.value)}
                        value={dough}
                    />
                    <RadioGroup
                        name="sauce"
                        variants={SAUCES}
                        onChange={(e) => setSauce(e.target.value)}
                        value={sauce}
                    />
                </div>

                <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap' }}>
                    <CheckboxGroup
                        name="cheeses"
                        variants={CHEESES}
                        onChange={(value, presents) => onCheckboxGroupChange(cheeses, setCheeses, value, presents)}
                        value={cheeses}
                    />

                    <CheckboxGroup
                        name="vegetables"
                        variants={VEGETABLES}
                        onChange={(value, presents) =>
                            onCheckboxGroupChange(vegetables, setVegetables, value, presents)
                        }
                        value={vegetables}
                    />

                    <CheckboxGroup
                        name="meats"
                        variants={MEATS}
                        onChange={(value, presents) => onCheckboxGroupChange(meats, setMeats, value, presents)}
                        value={meats}
                    />
                </div>
            </div>

            <button type="submit">
                {pizzaPrice} {LABELS.currency}
            </button>
        </form>
    )
}
