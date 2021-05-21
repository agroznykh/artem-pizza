import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { NotFound } from './pages/NotFound'
import { MainPage } from './pages/MainPage'
import { Registration } from './pages/Registration'
import { Login } from './pages/Login'
import { OrderPay } from './pages/orderPay/OrderPay'
import { Checkout } from './pages/Checkout'
import { Archive } from './pages/Archive'
import { Navbar } from './components/Navbar'
import {Configurator} from "./pages/Configurator";

function App() {
    const [order, setOrder] = useState({ pizza: null, price: 0 })

    return (
        <div className="App">
            <Navbar />
            <br />
            <Switch>
                <Route path="/configurator">
                    <Configurator saveOrder={setOrder} />
                </Route>
                <Route path="/order-pay">
                    <OrderPay order={order} />
                </Route>
                <Route path="/check">
                    <Checkout />
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
