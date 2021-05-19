import { PizzaConfigurator } from './containers/PizzaConfigurator'
import { PizzaSubmit } from './containers/PizzaSubmit'
import { PizzaResult } from './containers/PizzaResult'
import { LABELS } from './values'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>{LABELS.configurator}</h1>
                <PizzaConfigurator />
                <PizzaResult />
            </header>
        </div>
    )
}

export default App
