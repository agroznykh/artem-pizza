import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

describe('OrderPay', () => {
    describe('navigation', () => {
        it('goes to check page on "pay" button click', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/конфигуратор пиццы/i))
            fireEvent.click(getByText(/заказать на/i))
            fireEvent.click(getByText(/оплатить/i))

            expect(container.innerHTML).toMatch(/чек/i)
        })
    })
})
