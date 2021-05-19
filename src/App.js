import { Configurator } from './containers/Configurator'
import { useState } from 'react'
import { Order } from './components/Order'
import './App.css'

function App() {
    const [order, setOrder] = useState(null)

    return (
        <div className="App">
            <header className="App-header">
                <h1>Конфигуратор пиццы</h1>
                <Configurator saveOrder={setOrder} />
                {order && <Order pizza={order} />}
            </header>
        </div>
    )
}

export default App
