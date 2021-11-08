import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"
import Footer from "./Footer"
import { CustomProvider } from "./cartContext"

const App = () => {

    return (
        <BrowserRouter>
            <CustomProvider>
                <Header />
                <Switch>
                    <Route path="/" component={ ItemListContainer } exact />
                    <Route path="/cat/:cat" component={ ItemListContainer } />
                    <Route path="/item/producto:id" component={ ItemDetailContainer } />
                    <Route path="/cart" component={ Cart } />
                </Switch>
                <Footer />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App

