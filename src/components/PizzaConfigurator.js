import { PizzaChoice } from './PizzaChoice'
import {CHEESES, DOUGHS, MEATS, SAUCES, SIZES, VEGETABLES} from '../values'
import {
    actions,
    selectorCheeses,
    selectorDough,
    selectorMeats,
    selectorSauce,
    selectorSize,
    selectorVegetables
} from '../reducer'
import { PizzaMultiChoice } from './PizzaMultiChoice'

export const PizzaConfigurator = () => {
    return (
        <div style={{display: 'flex', flexFlow: 'column', flexWrap: 'wrap'}}>

            <div style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap'}}>
                <PizzaChoice name="size"  variants={SIZES} action={actions.CHANGE_SIZE} selector={selectorSize} />
                <PizzaChoice name="dough" variants={DOUGHS} action={actions.CHANGE_DOUGH} selector={selectorDough} />
                <PizzaChoice name="sauce" variants={SAUCES} action={actions.CHANGE_SAUCE} selector={selectorSauce} />
            </div>

            <div style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap'}}>
                <PizzaMultiChoice
                    name="cheeses"
                    variants={CHEESES}
                    actions={[actions.ADD_CHEESE, actions.REMOVE_CHEESE]}
                    selector={selectorCheeses}
                />

                <PizzaMultiChoice
                    name="vegetables"
                    variants={VEGETABLES}
                    actions={[actions.ADD_VEGETABLE, actions.REMOVE_VEGETABLE]}
                    selector={selectorVegetables}
                />

                <PizzaMultiChoice
                    name="meats"
                    variants={MEATS}
                    actions={[actions.ADD_MEAT, actions.REMOVE_MEAT]}
                    selector={selectorMeats}
                />
            </div>
        </div>
    )
}
