import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

describe('NotFound', () => {
    describe('navigation', () => {
        it('goes to main page by link', () => {
            const { container, getByText } = render(
                <MemoryRouter initialEntries={['/someUrl']}>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/главную/i))

            expect(container.innerHTML).toMatch(/вы на главной странице/i)
        })
    })
})
