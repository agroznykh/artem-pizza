import { fireEvent, render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { MainPageLink } from './components/MainPageLink'

describe('App', () => {
    describe('Main page', () => {
        it('renders correctly', () => {
            const { container } = render(
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            )

            expect(container).toContainHTML('Вы на главной странице')
        })
    })

    describe('navigation', () => {
        describe('Navbar component', () => {
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
        })

        describe('MainPageLink component', () => {
            it('forwards to Main page', () => {
                const { container, getByText } = render(
                    <MemoryRouter initialEntries={['/someUrl']}>
                        <App />
                        <MainPageLink />
                    </MemoryRouter>
                )

                fireEvent.click(getByText(/конфигуратор/i))
                fireEvent.click(getByText(/главную страницу/i))

                expect(container.innerHTML).toMatch(/вы на главной странице/i)
            })
        })

        it('goes to 404 page on unregistered URL', () => {
            const { container } = render(
                <MemoryRouter initialEntries={['/someUrl']}>
                    <App />
                </MemoryRouter>
            )

            expect(container.innerHTML).toMatch(/404/i)
        })

        it('Main page forwards to Configurator page by link', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/сделать заказ/i))

            expect(container.innerHTML).toMatch(/конфигуратор пиццы/i)
        })

        it('Login page forwards to registration page by link', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/логин/i))

            expect(container.innerHTML).toMatch(/авторизоваться/i)
        })

        it('Registration page forwards to registration page by link', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/логин/i))
            fireEvent.click(getByText(/регистрации/i))

            expect(container.innerHTML).toMatch(/зарегистрироваться/i)
        })

        it('OrderPay page forwards to Check page on "pay" button click', () => {
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

        it('Configurator page forwards to OrderPay page on "create order" button click', () => {
            const { container, getByText } = render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            fireEvent.click(getByText(/конфигуратор пиццы/i))
            fireEvent.click(getByText(/заказать на/i))

            expect(container.innerHTML).toMatch(/ваш заказ/i)
        })
    })
})
