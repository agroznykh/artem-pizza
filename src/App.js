import { PizzaConfigurator } from './components/PizzaConfigurator'
import { PizzaSubmit } from './components/PizzaSubmit'
import { PizzaResult } from './components/PizzaResult'
import { LABELS } from './values'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>{LABELS.configurator}</h1>
                <h2>STAGING</h2>
                <PizzaConfigurator />
                <PizzaSubmit />
                <PizzaResult />
                <button
                    onClick={() => {
                        throw new Error('Some error')
                    }}
                >
                    Break the world
                </button>
            </header>
        </div>
    )
}

export default App
