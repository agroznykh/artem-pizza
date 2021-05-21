import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

describe('Login', () => {
    describe('navigation', () => {
        it('goes to registration page by link', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            expect(container.innerHTML).toMatch(/вы на главной странице/i)

            fireEvent.click(getByText(/логин/i))

            expect(container.innerHTML).toMatch(/авторизоваться/i)
        })
    })
})
