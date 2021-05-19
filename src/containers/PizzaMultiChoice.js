import { useSelector } from '../state'
import { useDispatch } from '../PizzaProvider'
import { CheckboxGroup } from '../components/CheckboxGroup'

export function PizzaMultiChoice({ name, variants, selector, actions: [add, remove] }) {
    const pizzaPropValue = useSelector(selector)
    const dispatch = useDispatch()

    const dispatchChange = (e) => {
        const payload = variants[e.target.value]
        const action = (e.target.checked ? add : remove)(payload)
        dispatch(action)
    }

    return (
        <CheckboxGroup
            pizzaPropValue={pizzaPropValue}
            dispatchChange={dispatchChange}
            name={name}
            variants={variants}
        />
    )
}
