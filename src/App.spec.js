import { render } from '@testing-library/react'
import App from './App'

describe('Whole app', () => {
    it('renders correctly', () => {
        const { container } = render(<App />)

        expect(container).toContainHTML('Конфигуратор пиццы')
        expect(container).toContainHTML('200 руб')
    })
})
