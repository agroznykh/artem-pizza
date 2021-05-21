export const OrderToppings = ({ pizza }) => {
    const { cheeses, vegetables, meats } = pizza

    return (
        <div style={{ display: 'flex', flexFlow: 'column' }}>
            <span style={{ fontStyle: 'italic', margin: '10px 0' }}>Топпинги:</span>
            {!!cheeses.length && <span>Сыры - {cheeses.join(', ')}</span>}
            {!!vegetables.length && <span>Овощи - {vegetables.join(', ')}</span>}
            {!!meats.length && <span>Мясо - {meats.join(', ')}</span>}
        </div>
    )
}
