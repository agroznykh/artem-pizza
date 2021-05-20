import { Configurator } from './containers/Configurator'
import { useState } from 'react'
import { Order } from './components/Order'
import './App.css'

function App() {
    const [order, setOrder] = useState(null)

    return (
        <div className="App">
            <Configurator saveOrder={setOrder} />
            {order && <Order pizza={order} />}
        </div>
    )
}

export default App
