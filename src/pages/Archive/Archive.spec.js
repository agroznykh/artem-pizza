import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

describe('Archive', () => {
    describe('navigation', () => {
        it('goes to main page by link', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/архив/i))
            fireEvent.click(getByText(/главную/i))

            expect(container.innerHTML).toMatch(/вы на главной странице/i)
        })
    })
})
