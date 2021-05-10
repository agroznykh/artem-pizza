import { PizzaConfigurator } from './components/PizzaConfigurator'
import { PizzaSubmit } from './components/PizzaSubmit'
import { usePizzaState } from './PizzaProvider'
import { PizzaResult } from './components/PizzaResult'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Конфигуратор пиццы</h1>
                <PizzaConfigurator />
                <PizzaSubmit />
                <PizzaResult />
            </header>
        </div>
    )
}

export default App
