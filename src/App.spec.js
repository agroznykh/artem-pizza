import { fireEvent, render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
    describe('navigation by nav block', () => {
        it('goes to login page', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/логин/i))

            expect(container.innerHTML).toMatch(/авторизоваться/i)
        })

        it('goes to create-order page', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/конфигуратор пиццы/i))

            expect(container.innerHTML).toMatch(/конфигуратор пиццы/i)
        })

        it('goes to archive page', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/логин/i))
            fireEvent.click(getByText(/архив/i))

            expect(container.innerHTML).toMatch(/архив/i)
        })

        it('goes to 404 page on unregistered URL', () => {
            const { container } = render(
                <MemoryRouter initialEntries={['/someUrl']}>
                    <App />
                </MemoryRouter>
            )

            expect(container.innerHTML).toMatch(/404/i)
        })
    })
})
