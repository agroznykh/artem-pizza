import { CHEESES, DOUGHS, MEATS, SAUCES, SIZES, VEGETABLES } from '../Values'
import { useState } from 'react'
import { RadioGroup } from '../layout/RadioGroup'
import { CheckboxGroup } from '../layout/CheckboxGroup'
import { calcPizzaPrice } from '../Utils'
import { useHistory } from 'react-router-dom'

export const Configurator = ({ saveOrder }) => {
    const [size, setSize] = useState(SIZES.MEDIUM)
    const [dough, setDough] = useState(DOUGHS.THIN)
    const [sauce, setSauce] = useState(SAUCES.TOMATO)
    const [cheeses, setCheeses] = useState([])
    const [vegetables, setVegetables] = useState([])
    const [meats, setMeats] = useState([])

    const history = useHistory()

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

    const onOrderConfirmed = (e) => {
        e.preventDefault()
        saveOrder(pizza)
        history.push('/order')
    }

    const pizzaPrice = calcPizzaPrice(pizza)

    return (
        <>
            <h1>Конфигуратор пиццы</h1>
            <form onSubmit={onOrderConfirmed}>
                <fieldset style={{ display: 'flex', flexFlow: 'column', flexWrap: 'wrap' }}>
                    <fieldset style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap' }}>
                        <RadioGroup
                            name="Размер"
                            variants={SIZES}
                            onChange={(e) => setSize(e.target.value)}
                            value={size}
                        />
                        <RadioGroup
                            name="Тесто"
                            variants={DOUGHS}
                            onChange={(e) => setDough(e.target.value)}
                            value={dough}
                        />
                        <RadioGroup
                            name="Соус"
                            variants={SAUCES}
                            onChange={(e) => setSauce(e.target.value)}
                            value={sauce}
                        />
                    </fieldset>

                    <fieldset style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap' }}>
                        <CheckboxGroup
                            name="Сыры"
                            variants={CHEESES}
                            onChange={(value, presents) => onCheckboxGroupChange(cheeses, setCheeses, value, presents)}
                            value={cheeses}
                        />

                        <CheckboxGroup
                            name="Овощи"
                            variants={VEGETABLES}
                            onChange={(value, presents) =>
                                onCheckboxGroupChange(vegetables, setVegetables, value, presents)
                            }
                            value={vegetables}
                        />

                        <CheckboxGroup
                            name="Мясо"
                            variants={MEATS}
                            onChange={(value, presents) => onCheckboxGroupChange(meats, setMeats, value, presents)}
                            value={meats}
                        />
                    </fieldset>
                </fieldset>

                <button type="submit">{pizzaPrice} руб</button>
            </form>
        </>
    )
}
