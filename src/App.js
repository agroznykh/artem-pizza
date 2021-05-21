import { Link, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { NotFound } from './pages/NotFound/NotFound'
import { MainPage } from './pages/Main/MainPage'
import { Registration } from './pages/Registration/Registration'
import { Login } from './pages/Login/Login'
import { OrderPay } from './pages/OrderPay/OrderPay'
import { Check } from './pages/Check/Check'
import { Archive } from './pages/Archive/Archive'
import { OrderCreate } from './pages/OrderCreate/OrderCreate'

function App() {
    const [order, setOrder] = useState({ pizza: null, price: 0 })

    return (
        <div className="App">
            <nav>
                <p>
                    <Link to="/login">Логин</Link>
                </p>
                <p>
                    <Link to="/order-create">Конфигуратор пиццы</Link>
                </p>
                <p>
                    <Link to="/archive">Архив заказов</Link>
                </p>
            </nav>
            <br />
            <Switch>
                <Route path="/order-create">
                    <OrderCreate saveOrder={setOrder} />
                </Route>
                <Route path="/order-pay">
                    <OrderPay order={order} />
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
