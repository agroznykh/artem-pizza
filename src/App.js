import { Link, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { NotFound } from './pages/NotFound'
import { Configurator } from './containers/Configurator'
import { MainPage } from './pages/MainPage'
import { Registration } from './pages/Registration'
import { Login } from './pages/Login'
import { MakeOrder } from './pages/MakeOrder'
import { Check } from './pages/Check'
import { Archive } from './pages/Archive'

function App() {
    const [order, setOrder] = useState({ pizza: null, price: 0 })

    return (
        <div className="App">
            <nav>
                <p>
                    <Link to="/login">Логин</Link>
                </p>
                <p>
                    <Link to="/configurator">Конфигуратор пиццы</Link>
                </p>
                <p>
                    <Link to="/archive">Архив заказов</Link>
                </p>
            </nav>
            <br />
            <Switch>
                <Route path="/configurator">
                    <Configurator saveOrder={setOrder} />
                </Route>
                <Route path="/order">
                    <MakeOrder order={order} />
                </Route>
                <Route path="/check">
                    <Check />
                </Route>
                <Route path="/archive">
                    <Archive />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export default App
