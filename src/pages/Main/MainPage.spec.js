import { render } from '@testing-library/react'
import { MainPage } from './MainPage'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

describe('MainPage', () => {
    it('renders correctly', () => {
        const { container } = render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        )

        expect(container).toContainHTML('Вы на главной странице')
    })
})
