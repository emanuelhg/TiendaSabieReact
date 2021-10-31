import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Footer from "./Footer"

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={ ItemListContainer } exact />
                <Route path="/cat/:cat" component={ ItemListContainer } />
                <Route path="/item/producto:id" component={ ItemDetailContainer } />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App

