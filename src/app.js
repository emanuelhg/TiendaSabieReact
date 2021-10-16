import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

const App = () => {
    return (
        <>
        <Header/>
        <ItemListContainer
            nombre="usuario"
        />
        <Footer/>
        </>
    )
}

export default App;