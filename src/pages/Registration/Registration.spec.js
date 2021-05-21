import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

describe('Registration', () => {
    describe('navigation', () => {
        it('goes to login page by link', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/логин/i))
            fireEvent.click(getByText(/регистрации/i))

            expect(container.innerHTML).toMatch(/зарегистрироваться/i)
        })
    })
})
