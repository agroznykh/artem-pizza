import { render } from '@testing-library/react'
import { PizzaProvider } from './PizzaProvider'
import App from './App'
import { LABELS } from './values'

describe('Whole app', () => {
    it('renders correctly', () => {
        const { container } = render(
            <PizzaProvider>
                <App />
            </PizzaProvider>
        )

        expect(container).toContainHTML(LABELS.configurator)
        expect(container).toContainHTML(LABELS.currency)
    })
})
