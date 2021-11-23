import { BrowserRouter, Route, Switch } from "react-router-dom"
import SiteNav from "./components/SiteNav"
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from "./containers/ItemDetailContainer"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import { CustomProvider } from "./context/cartContext"

const App = () => {

    return (
        <BrowserRouter>
            <CustomProvider>
                <SiteNav/>
                <Switch>
                    <Route path="/" component={ ItemListContainer } exact />
                    <Route path="/categoria/:categoria" component={ ItemListContainer } />
                    <Route path="/item/producto:id" component={ ItemDetailContainer } />
                    <Route path="/cart" component={ Cart } />
                </Switch>
                <Footer />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App

