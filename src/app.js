import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={ ItemListContainer } exact />
                <Route path="/cat/:id" component={ ItemListContainer } />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;

