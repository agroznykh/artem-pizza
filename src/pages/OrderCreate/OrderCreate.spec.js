import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

const renderApp = () => {
    return render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )
}

describe('OrderCreate', () => {
    describe('navigation', () => {
        it('goes to order-pay page on "create order" button click', () => {
            const { container, getByText } = renderApp()

            fireEvent.click(getByText(/конфигуратор пиццы/i))
            fireEvent.click(getByText(/заказать на/i))

            expect(container.innerHTML).toMatch(/ваш заказ/i)
        })
    })
})
