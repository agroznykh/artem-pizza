import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import { Order } from './components/Order'
import './App.css'
import { NotFoundPage } from './pages/NotFoundPage'
import { Configurator } from './containers/Configurator'
import { MainPage } from './pages/MainPage'

function App() {
    const [order, setOrder] = useState(null)

    return (
        <div className="App">
            <Switch>
                <Route path="/configurator">
                    <Configurator saveOrder={setOrder} />
                </Route>
                <Route path="/order">
                    <Order pizza={order} />
                </Route>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App
