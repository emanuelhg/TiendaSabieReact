const Item = ({ title, pictureURL }) => {

    return (
            <>
                <p className="fs-4 text text-primary">{ title }</p>
                <img alt='img' src={ pictureURL } />
            </>
    )
}

export default Item

