import { useSelector } from '../state'
import { useDispatch } from '../PizzaProvider'
import { RadioGroup } from '../components/RadioGroup'

export function PizzaChoice({ name, variants, selector, action }) {
    const pizzaPropValue = useSelector(selector)
    const dispatch = useDispatch()

    const dispatchChange = (e) => {
        dispatch(action(variants[e.target.value]))
    }

    return (
        <RadioGroup pizzaPropValue={pizzaPropValue} dispatchChange={dispatchChange} name={name} variants={variants} />
    )
}
