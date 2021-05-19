import { Configurator } from './containers/Configurator'
import { LABELS } from './values'
import { useState } from 'react'
import { Order } from './containers/Order'

function App() {
    const [order, setOrder] = useState(null)

    return (
        <div className="App">
            <header className="App-header">
                <h1>{LABELS.configurator}</h1>
                <Configurator saveOrder={setOrder} />
                {order && <Order pizza={order} />}
            </header>
        </div>
    )
}

export default App
