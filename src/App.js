import { PizzaConfigurator } from './components/PizzaConfigurator'
import { PizzaSubmit } from './components/PizzaSubmit'
import { PizzaResult } from './components/PizzaResult'
import { LABELS } from './values'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>{LABELS.configurator}</h1>
                <PizzaConfigurator />
                <PizzaSubmit />
                <PizzaResult />
                <br />
            </header>
        </div>
    )
}

export default App
