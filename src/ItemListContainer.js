import ItemList from "./ItemList"
const ItemListContainer = ({nombre}) => {

    return (
        <>
            <div className="bannerInicial">
                <h1 className="text-center text-muted">Bienvenido <span className="text-info"> { nombre } </span>a
                    tienda SaBie!</h1>
                <ItemList/>
            </div>
            
        </>
    )
}

export default ItemListContainer
