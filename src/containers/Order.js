import { LABELS } from '../values'
import { calcPizzaPrice } from '../Utils'

export function Order({ pizza }) {
    const { size, dough, sauce, cheeses, vegetables, meats } = pizza

    return (
        <>
            <h3>{LABELS.yourPizza}:</h3>
            <div style={{ display: 'flex', flexFlow: 'column' }}>
                <span>
                    {LABELS.size} - {size}
                </span>
                <span>
                    {LABELS.dough} - {dough}
                </span>
                <span>
                    {LABELS.sauce} - {sauce}
                </span>
            </div>
            {!!(cheeses.length || vegetables.length || meats.length) && (
                <div style={{ display: 'flex', flexFlow: 'column' }}>
                    <span style={{ fontStyle: 'italic', margin: '10px 0' }}>{LABELS.addons}:</span>
                    {!!cheeses.length && (
                        <span>
                            {LABELS.cheeses} - {cheeses.join(', ')}
                        </span>
                    )}
                    {!!vegetables.length && (
                        <span>
                            {LABELS.vegetables} - {vegetables.join(', ')}
                        </span>
                    )}
                    {!!meats.length && (
                        <span>
                            {LABELS.meats} - {meats.join(', ')}
                        </span>
                    )}
                </div>
            )}
            <br />
            {LABELS.total}: {calcPizzaPrice(pizza)} {LABELS.currency}
        </>
    )
}
