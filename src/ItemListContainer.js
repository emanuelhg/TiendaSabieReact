import ItemCount from "./ItemCount"

const ItemListContainer = ({nombre}) => {
    return (
        <>
            <div className="bannerInicial">
                <h1 className="text-center text-muted">Bienvenido <span className="text-info"> { nombre } </span>a
                    tienda SaBie!</h1>
            </div>
            <ItemCount initial={1} stock={5} />
        </>
    )
}

export default ItemListContainer
