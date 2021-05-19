import { render } from '@testing-library/react'
import App from './App'
import { LABELS } from './values'

describe('Whole app', () => {
    it('renders correctly', () => {
        const { container } = render(<App />)

        expect(container).toContainHTML(LABELS.configurator)
        expect(container).toContainHTML(LABELS.currency)
    })
})
